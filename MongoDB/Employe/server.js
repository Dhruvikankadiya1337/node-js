import express from "express";
import mongoose from "mongoose";
import employeeRoutes from "./routes/employeeRoutes.js";

const app = express();
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/employees")
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("Error connecting to DB"));

// ROUTES CONNECT KARO
app.use("/employees", employeeRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
