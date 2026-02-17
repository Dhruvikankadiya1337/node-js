// import { otpcollection as OTP } from "../models/otp.js";
// import { sendOTPEmail } from "../utils/sendemail.js";

// const TEST_MODE = true;

// // Send OTP
// export const sendOTP = async (req, res) => {
//   const { email } = req.body;

//   // Generate OTP
//   const otp = TEST_MODE
//     ? "123456"
//     : Math.floor(100000 + Math.random() * 900000).toString();

//   if (!TEST_MODE) {
//     // Real OTP send
//     await sendOTPEmail(email, otp);
//   } else {
//     console.log("TEST MODE OTP GENERATED:", otp, "EMAIL:", email);
//   }

//   // Save to DB
//   await OTP.create({
//     email,
//     otp,
//     expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
//   });

//   res.json({ status: true, message: "OTP sent to email (TEST MODE)" });
// };

// // Verify OTP
// export const verifyOTP = async (req, res) => {
//   const { userId, otp } = req.body;

//   if (TEST_MODE) {
//     // 🔹 In TEST_MODE, any number passes
//     await OTP.deleteMany({ email: userId });
//     return res.json({ status: true, message: "OTP verified successfully (TEST MODE)" });
//   }

//   // Production mode: check DB
//   const record = await OTP.findOne({ email: userId, otp });
//   if (!record) return res.json({ status: false, message: "Invalid OTP" });

//   if (record.expiresAt < Date.now()) {
//     return res.json({ status: false, message: "OTP expired" });
//   }

//   // Delete OTP after verification
//   await OTP.deleteMany({ email: userId });
//   res.json({ status: true, message: "OTP verified successfully" });
// };



import OTP from "../models/otp.js";

const TEST_MODE = true;

export const sendOTP = async (req, res) => {
  const { email } = req.body;
  const otp = "123456";
  await OTP.create({
    email,
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000,
  });

  console.log("TEST MODE OTP:", otp, "EMAIL:", email);

  res.json({
    status: true,
    message: "OTP sent (TEST MODE)",
  });
};

export const verifyOTP = async (req, res) => {
 
  return res.json({
    status: true,
    message: "OTP verified successfully (TEST MODE)",
  });
};
