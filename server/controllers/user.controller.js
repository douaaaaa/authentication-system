import Users from "../models/user.model.js";
// Import bcryptjs for hashing passwords
import bcryptjs from "bcryptjs";
// Import utility function to generate a JWT token and send it in a cookie
import generateTokenAndSendCookie from "../utils/generateTokenAndSendCookie.js";
import {
  sendResetPasswordEmail,
  sendWelcomeEmail,
  verificationEmail,
} from "../mails/emails.js";
import crypto from "crypto";

// @route /api/auth/signup
// @desc Handle user registration
export const signup = async (req, res) => {
  // Extract name, email, and password from the request body
  const { name, email, password } = req.body;
  try {
    // Check if all required fields are provided
    if (!email || !name || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    // Check if the user already exists in the database
    const user = await Users.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "The user already exists" });
    }
    // Hash the user's password for security
    const hashedPassword = await bcryptjs.hash(password, 10);
    // Generate a random 6-digit verification token
    const verificationToken = Math.floor(
      Math.random() * 900000 + 100000
    ).toString();
    // Create a new user in the database
    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });
    // Generate a JWT token, send it in a cookie, and authenticate the user
    generateTokenAndSendCookie(res, newUser._id);
    // send verification code via email
    await verificationEmail(newUser.email, newUser.verificationToken);
    // Send a success response to the client with the newly created user (excluding the password)
    res.status(200).json({
      success: true,
      message: "user created successfully",
      user: {
        ...newUser._doc,
        password: undefined,
      },
    });
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(400).json({ success: false, error: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  const { code } = req.body;
  try {
    if (!code) {
      return res
        .status(400)
        .json({ success: false, message: "the verification code is required" });
    }
    const user = await Users.findOne({
      verificationToken: code,
      verificationTokenExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "expired or invalide token" });
    }
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();
    await sendWelcomeEmail(user.name, user.email);
    res.status(200).json({
      success: true,
      message: "your email successfully verified",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: "server error: error verifying the email",
    });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res
      .status(200)
      .json({ success: true, message: "the user successfully logout" });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "server error: error logging out",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong credentials" });
    }
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ success: false, message: "Wrong credentials" });
    }
    generateTokenAndSendCookie(res, user._id);
    res.status(200).json({
      success: true,
      message: "user login successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "server error: error sign in",
    });
  }
};

export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "user not found" });
    }
    const resetToken = await crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 60 * 60 * 1000;
    user.resetToken = resetToken;
    user.resetTokenExpiresAt = resetTokenExpiresAt;
    await user.save();
    await sendResetPasswordEmail(email, resetToken);
    res.status(200).json({
      success: true,
      message: "the reset email is send successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: "server error: Resetting Password process went wrong",
    });
  }
};
