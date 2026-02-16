import Menu from "../models/menu.js";

export const addMenuItem = async (req, res) => {
  const { name, price, category, available } = req.body;
  try {
    const item = await Menu.create({ name, price, category, available });
    res.json({ status: true, message: "Menu item added", item });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

// Get all menu items
export const getMenuItems = async (req, res) => {
  try {
    const items = await Menu.find();
    res.json({ status: true, items });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

// Update menu item
export const updateMenuItem = async (req, res) => {
  const { id, name, price, category, available } = req.body;
  try {
    const item = await Menu.findByIdAndUpdate(id, { name, price, category, available }, { new: true });
    res.json({ status: true, message: "Menu updated", item });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

// Delete menu item
export const deleteMenuItem = async (req, res) => {
  const { id } = req.body;
  try {
    await Menu.findByIdAndDelete(id);
    res.json({ status: true, message: "Menu item deleted" });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};
