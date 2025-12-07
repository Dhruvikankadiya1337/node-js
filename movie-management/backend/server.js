import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import movieRoutes from "./routes/movieRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/movieDB")
  .then(() => console.log("MongoDB Connected ✔"))
  .catch(err => console.log(err));

// Routes
app.use("/api/movies", movieRoutes);

// Default route (test)
app.get("/", (req, res) => {
  res.send("Movie API WORKING ✔");
});

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
