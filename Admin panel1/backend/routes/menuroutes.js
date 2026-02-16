import express from "express";
import { verifyToken } from "../middleware/authmiddleware.js";
import { checkRole } from "../middleware/rolemiddleware.js";
import { 
  addMenuItem, 
  getMenuItems, 
  updateMenuItem, 
  deleteMenuItem 
} from "../controller/menucontroller.js";

const router = express.Router();


router.get("/", verifyToken, checkRole("admin", "user", "cashier"), getMenuItems);
router.post("/add", verifyToken, checkRole("admin"), addMenuItem);
router.put("/update", verifyToken, checkRole("admin"), updateMenuItem);
router.delete("/delete", verifyToken, checkRole("admin"), deleteMenuItem);

export default router;
