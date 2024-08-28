// Import the Router function from Express to create a new router instance
import { Router } from "express";
// Import the signup controller function to handle user registration
import { signup } from "../controllers/user.controller.js";

// Create a new router instance for handling user-related (auth-related) routes
const userRoute = Router();

// Define a POST route for user signup, mapping it to the signup controller function
userRoute.post("/signup", signup);

export default userRoute;
