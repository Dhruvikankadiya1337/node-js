import express from "express";
import { getAllUsers, updateUserByAdmin, deleteUser } from "../controller/admincontroller.js";

const router = express.Router();

router.get("/users", getAllUsers);
router.put("/update", updateUserByAdmin);
router.delete("/delete", deleteUser);

export default router;
