import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [{ name: String, quantity: Number, price: Number }],
  totalPrice: { type: Number, required: true },
  tableNumber: { type: Number },
  status: { type: String, enum: ["pending", "preparing", "served", "cancelled"], default: "pending" },
}, { timestamps: true });

export default mongoose.model("order", orderSchema);
