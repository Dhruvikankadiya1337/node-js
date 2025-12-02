import express from "express";
import {
  addPlant,
  getPlants,
  getPlantById,
  updatePlant,
  deletePlant
} from "../controllers/Plant.controller.js";

const router = express.Router();

router.post("/", addPlant);
router.get("/", getPlants);
router.get("/:id", getPlantById);
router.put("/:id", updatePlant);
router.delete("/:id", deletePlant);

export default router; 
