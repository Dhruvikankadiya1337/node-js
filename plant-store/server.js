import  express from "express";
import cors from "cors";
import  connectDB from "./config/db.js";
import plantRoutes  from"./routes/plant.routes.js";
import logger from "./middleware/logger.js";

const app = express();
// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/plants", plantRoutes);

// Start server
connectDB();

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
