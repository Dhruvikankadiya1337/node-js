import express from "express";
import { signup, verifyOTP, login, logout } from "../controller/authcontroller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOTP);
router.post("/login", login);
router.post("/logout", logout);

export default router;
