import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroutes.js";
import blogRoutes from "./routes/blogroutes.js";
import connectDB from "./config/db.js";
import cors from "cors";

const app = express();



app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"], // ✅ Add all frontend origins here
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


app.use(express.json());
app.use(cookieParser());


app.use("/uploads/blog", express.static("uploads/blog"));


app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

connectDB();

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
