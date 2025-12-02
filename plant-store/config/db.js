import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/plant-store");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Mongo error:", error);
  }
};

export default connectDB;
