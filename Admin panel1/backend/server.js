import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroutes.js";
import adminRoutes from "./routes/adminroutes.js";
import userRoutes from "./routes/userroutes.js";
import menuRoutes from "./routes/menuroutes.js";
import orderRoutes from "./routes/orderroutes.js";
import otpRoutes from "./routes/otproutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/menu", menuRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/otp", otpRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});
