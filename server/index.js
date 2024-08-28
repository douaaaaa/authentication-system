// Import the Express library
import express from "express";
// Import and configure dotenv to load environment variables from a .env file
import "dotenv/config";
// Import the Mongoose library to interact with MongoDB
import mongoose from "mongoose";

// Set the port from the environment variable or default to 8000 if not provided
const PORT = process.env.PORT || 8000;
const MONGO = process.env.MONGO;

// Create an instance of an Express application
const app = express();

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
