import express from "express";
import {
  getAllProducts,
  getProductById,
  filterProducts,
} from "../controller/productcontroller.js";

const router = express.Router();

router.get("/", getAllProducts);
router.get("/filter", filterProducts);
router.get("/:id", getProductById);

export default router;
