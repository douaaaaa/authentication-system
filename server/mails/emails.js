import { VERIFICATION_TOKEN_EMAIL } from "./emailsTemplates.js";
import transporter from "./nodemailer.config.js";

export const verificationEmail = async (email, verificationCode) => {
  const mailOptions = {
    from: {
      name: "Auth Verification",
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
