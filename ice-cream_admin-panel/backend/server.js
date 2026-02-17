import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routers/authroutes.js";
import otproutes from './routers/otproutes.js'

dotenv.config();
connectDB(); 

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/otp", otproutes);


app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
