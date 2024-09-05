// Import the Router function from Express to create a new router instance
import { Router } from "express";
// Import the signup controller function to handle user registration
import {
  forgetPassword,
  login,
  logout,
  setNewPassword,
  signup,
  verifyEmail,
} from "../controllers/user.controller.js";

// Create a new router instance for handling user-related (auth-related) routes
const userRoute = Router();

// Define a POST route for user signup, mapping it to the signup controller function
userRoute.post("/signup", signup);
userRoute.post("/verify-email", verifyEmail);
userRoute.post("/logout", logout);
userRoute.post("/login", login);
userRoute.post("/reset-password", forgetPassword);
userRoute.post("/reset-password/:token", setNewPassword);

export default userRoute;
