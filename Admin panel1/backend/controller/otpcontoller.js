import { generateOTP } from "../utils/otp.js";
import { sendOTPEmail } from "../utils/sendemail.js";
import OtpModel from "../models/otpmodels.js";

export const sendOTP = async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  // Save OTP in DB with expiry 5 min
  await OtpModel.create({ email, otp, expireAt: Date.now() + 5*60*1000 });

  // Send email
  await sendOTPEmail(email, otp);

  res.json({ status: true, message: "OTP sent to email" });
};

export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  const record = await OtpModel.findOne({ email, otp });
  if (!record) return res.json({ status: false, message: "Invalid OTP" });

  if (record.expireAt < Date.now()) {
    return res.json({ status: false, message: "OTP expired" });
  }

  await OtpModel.deleteMany({ email });
  res.json({ status: true, message: "OTP verified successfully" });
};
