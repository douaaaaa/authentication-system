import {
  RESET_PASSWORD,
  VERIFICATION_TOKEN_EMAIL,
  WELCOME_EMAIL,
} from "./emailsTemplates.js";
import transporter from "./nodemailer.config.js";

export const verificationEmail = async (email, verificationCode) => {
  const mailOptions = {
    from: {
      name: "SecureAuth",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "Email Verification",
    html: VERIFICATION_TOKEN_EMAIL.replace(
      "{verificationCode}",
      verificationCode
    ),
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

export const sendWelcomeEmail = async (name, email) => {
  const mailOptions = {
    from: {
      name: "SecureAuth",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "Welcome email",
    html: WELCOME_EMAIL.replace("{name}", name),
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

export const sendResetPasswordEmail = async (email, token) => {
  const mailOptions = {
    from: {
      name: "SecureAuth",
      address: process.env.EMAIL,
    },
    to: email,
    subject: "Reset Password",
    html: RESET_PASSWORD.replace(
      "{token}",
      `http://localhost:3000/reset-password/${token}`
    ),
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
