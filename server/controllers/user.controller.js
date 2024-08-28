import Users from "../models/user.model.js";
// Import bcryptjs for hashing passwords
import bcryptjs from "bcryptjs";
// Import utility function to generate a JWT token and send it in a cookie
import generateTokenAndSendCookie from "../utils/generateTokenAndSendCookie.js";

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
    // sendEmail code
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
