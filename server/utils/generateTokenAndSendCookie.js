// Import the jsonwebtoken library to handle JSON Web Tokens (JWTs)
import jwt from "jsonwebtoken";

const generateTokenAndSendCookie = (res, id) => {
  // Create a JWT with the user ID as payload, a secret key, and an expiration time of 7 days
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export default generateTokenAndSendCookie;
