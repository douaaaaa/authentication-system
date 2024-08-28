// Import the Mongoose library to interact with MongoDB
import mongoose from "mongoose";

// Define the schema for the User model
const userSchema = mongoose.Schema(
  {
    // The user's name (required)
    name: {
      type: String,
      require: true,
    },
    // The user's email (required and must be unique)
    email: {
      type: String,
      require: true,
      unique: true,
    },
    // The user's password (required)
    password: {
      type: String,
      require: true,
    },
    // A flag indicating if the user is verified (default: false) The user will receive a verification token via email when they sign up for the first time, for verification purposes.
    isVerified: {
      type: Boolean,
      default: false,
    },
    // The date and time of the user's last login (default: current date)
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    // Token used for verifying the user's email
    verificationToken: String,
    // Expiration date for the verification token
    verificationTokenExpiresAt: Date,
    // Token used for resetting the user's password
    resetPassword: String,
    // Expiration date for the reset password token
    resetPasswordExpiresAt: Date,
  },
  {
    // Automatically add `createdAt` and `updatedAt` timestamps to the schema
    timestamps: true,
  }
);

// Create the Users model from the schema
const Users = mongoose.model("Users", userSchema);

// Export the Users model for use in other parts of the application
export default Users;
