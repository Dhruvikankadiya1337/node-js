import Plant from "../models/Plant.model.js";


// Add new plant
export const addPlant = async (req, res) => {
  try {
    const plant = await Plant.create(req.body);
    res.status(201).json({ message: "Plant added successfully!", plant });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all plants
export const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get plant by ID
export const getPlantById = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    if (!plant) return res.status(404).json({ message: "Plant not found" });

    res.json(plant);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update plant
export const updatePlant = async (req, res) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Plant updated successfully", plant });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete plant
export const deletePlant = async (req, res) => {
  try {
    await Plant.findByIdAndDelete(req.params.id);
    res.json({ message: "Plant deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
