// import express from "express";
// import cors from "cors";
// import path from "path";
// import connectDB from "./config/db.js";
// import movieRoutes from "./routes/movieroutes.js";
// import { fileURLToPath } from "url";

// connectDB();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// app.use(cors());
// app.use(express.json());


// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use("/api/movies", movieRoutes);



// app.listen(5000, () => {
//   console.log("server starting at http://localhost:5000");
// });



// import express from "express";
// import cors from "cors";
// import path from "path";
// import mongoose from "mongoose";
// import movieRoutes from "./routes/movieroutes.js";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Public uploads folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Routes
// app.use("/api/movies", movieRoutes);

// // DB Connection (without dotenv)
// mongoose
//   .connect("mongodb://127.0.0.1:27017/moviesDB")
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log("DB Error:", err));

// // Start Server
// app.listen(5000, () => {
//   console.log("Server running at http://localhost:5000");
// });




import express from "express";
import cors from "cors";
import path from "path";
import movieRoutes from "./routes/movieroutes.js";
import connectDB from "./config/db.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));


// public folder for images
app.use("/uploads", express.static("uploads"));

app.use("/api/movies", movieRoutes);

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
