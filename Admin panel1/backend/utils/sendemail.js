import nodemailer from "nodemailer";

export const sendOTPEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "Your OTP for Admin Panel",
    html: `<h3>Your OTP is <b>${otp}</b></h3><p>Valid for 5 minutes only</p>`,
  };

  await transporter.sendMail(mailOptions);
};
