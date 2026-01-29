import express from "express";
import { signup, verifyOTP, login } from "../controllers/authController.js";
import authMiddleware from "../middleware/authmiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOTP);
router.post("/login", login);

router.get("/home", authMiddleware, (req, res) => {
  res.json({ message: "Welcome to Home Page" });
});

export default router;
