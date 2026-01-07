import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authroutes.js";
import authMiddleware from "./middleware/authmiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB()
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("MongoDB Connection Error :", err.message));

app.use("/api/auth", authRoutes);

app.get("/home", authMiddleware, (req, res) => {
  res.send("Welcome to Home Page");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
