import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import {connectDB} from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config()
const app =express()
app.use(cookieParser())
app.use(express())
app.use(cors())

connectDB();

app.use("/api/auth" , authRoutes);

app.listen(process.env.PORT, ()=>
    console.log("server started!")
);