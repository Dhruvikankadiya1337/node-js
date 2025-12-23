import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: String,
    category: String,
    brand: String,
    price: Number,
    rating: Number,
    description: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
