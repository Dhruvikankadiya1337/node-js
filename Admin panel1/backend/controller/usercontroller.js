import {usercollection} from "../models/user.js";
import Order from "../models/order.js";

// Get profile
export const getProfile = async (req, res) => {
  try {
    const user = await usercollection.findById(req.user.id);
    res.json({ status: true, user });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

// Update profile
export const updateProfile = async (req, res) => {
  const { name, phone, address } = req.body;
  try {
    const user = await usercollection.findByIdAndUpdate(req.user.id, { name, phone, address }, { new: true });
    res.json({ status: true, message: "Profile updated", user });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

// Get user orders
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("items.menu");
    res.json({ status: true, orders });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};
