import {usercollection} from '../models/user.js'
import Menu from "../models/menu.js";
import Order from "../models/order.js";

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await usercollection.find();
    res.json({ status: true, users });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

// Update user by admin
export const updateUserByAdmin = async (req, res) => {
  const { email, name, role } = req.body;
  try {
    const user = await usercollection.findOneAndUpdate({ email }, { name, role }, { new: true });
    if (!user) return res.json({ status: false, message: "User not found" });
    res.json({ status: true, message: "User updated", user });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    await User.findOneAndDelete({ email });
    res.json({ status: true, message: "User deleted" });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

// View all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user").populate("items.menu");
    res.json({ status: true, orders });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  const { orderId, status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    res.json({ status: true, message: "Order status updated", order });
  } catch (err) {
    res.json({ status: false, message: err.message });
  }
};
