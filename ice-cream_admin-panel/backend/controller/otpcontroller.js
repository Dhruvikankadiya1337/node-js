import { otpcollection } from "../models/otp.js"; 
import { authCollection } from "../models/authmodels.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

// Send OTP for forget password
export const sendForgetPasswordOTP = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.json({ status: false, message: "Email is required" });

  const user = await authCollection.findOne({ email });
  if (!user) return res.json({ status: false, message: "User not found" });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  await otpcollection.create({
    email,
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL , pass: process.env.PASS },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Forget Password OTP",
    html: `<h3>Your OTP is ${otp}. Valid for 5 minutes.</h3>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ status: true, message: "OTP sent to email" });
  } catch (err) {
    console.log(err);
    res.json({ status: false, message: "Failed to send OTP" });
  }
};

// Verify OTP
export const verifyForgetOTP = async (req, res) => {
  const { email, otp } = req.body;

  const record = await otpcollection.findOne({ email, otp });
  if (!record) return res.json({ status: false, message: "Invalid OTP" });

  if (record.expiresAt < Date.now())
    return res.json({ status: false, message: "OTP expired" });

  await otpcollection.deleteMany({ email });

  res.json({ status: true, message: "OTP verified" });
};


// Change Password
export const changePassword = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!password || !confirmPassword) {
    return res.json({ status: false, message: "All fields required" });
  }

  if (password !== confirmPassword) {
    return res.json({ status: false, message: "Passwords do not match" });
  }

  const hashed = await bcrypt.hash(password, 10);

  await authCollection.findOneAndUpdate({ email }, { password: hashed });

  res.json({ status: true, message: "Password changed successfully" });
};
