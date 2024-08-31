// Import the Express library
import express from "express";
// Import and configure dotenv to load environment variables from a .env file
import "dotenv/config";
// Import the Mongoose library to interact with MongoDB
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

// Set the port from the environment variable or default to 8000 if not provided
const PORT = process.env.PORT || 8000;
const MONGO = process.env.MONGO;

// Create an instance of an Express application
const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Use Express middleware to parse JSON bodies from incoming requests
app.use(express.json());
// Use Express middleware to parse URL-encoded bodies (from HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", userRoute);

// Connect to the MongoDB database using Mongoose
mongoose
  .connect(MONGO)
  .then(() =>
    // Start the server and listen on the specified port
    app.listen(PORT, () => {
      console.log(`the port is running on the port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));
