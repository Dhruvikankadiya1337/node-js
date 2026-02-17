import express from "express";
import {
  sendForgetPasswordOTP,
  verifyForgetOTP,
  changePassword,
} from "../controller/otpcontroller.js";

const router = express.Router();

router.post("/forget-password", sendForgetPasswordOTP);
router.post("/verify-otp", verifyForgetOTP);
router.post("/change-password", changePassword);

export default router;
