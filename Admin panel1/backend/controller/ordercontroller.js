import Order from "../models/order.js";

// Place new order
export const placeOrder = async (req, res) => {
  try {
    const { items, totalPrice, tableNumber } = req.body;
    const order = await Order.create({
      user: req.user.id,
      items,
      totalPrice,
      tableNumber,
      status: "pending",
    });
    res.status(201).json({ status: true, message: "Order placed!", order });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

// Get all orders (admin)
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.json({ status: true, orders });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};

// Update order status (admin)
export const updateOrder = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
    if (!order) return res.status(404).json({ status: false, message: "Order not found" });
    res.json({ status: true, message: "Order updated", order });
  } catch (err) {
    res.status(500).json({ status: false, message: err.message });
  }
};
