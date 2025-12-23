import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/productdb");
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Error:", error.message);
  }
};

export default connectDB;
