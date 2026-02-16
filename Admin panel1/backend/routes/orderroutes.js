import express from "express";
import { verifyToken } from "../middleware/authmiddleware.js";
import { checkRole } from "../middleware/rolemiddleware.js";
import { 
  placeOrder, 
  getOrders, 
  updateOrder 
} from "../controller/ordercontroller.js";

const router = express.Router();


router.post("/place", verifyToken, checkRole("user", "cashier", "admin"), placeOrder);
router.get("/", verifyToken, checkRole("admin"), getOrders);
router.put("/update", verifyToken, checkRole("admin"), updateOrder);

export default router;
