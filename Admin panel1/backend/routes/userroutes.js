import express from "express";
import { verifyToken } from "../middleware/authmiddleware.js";
import { checkRole } from "../middleware/rolemiddleware.js";
import { 
  getProfile, 
  updateProfile, 
  getUserOrders 
} from "../controller/usercontroller.js";

const router = express.Router();

router.get("/profile", verifyToken, checkRole("user", "admin", "cashier"), getProfile);
router.put("/profile/update", verifyToken, checkRole("user", "admin", "cashier"), updateProfile);
router.get("/orders", verifyToken, checkRole("user", "cashier", "admin"), getUserOrders);

export default router;
