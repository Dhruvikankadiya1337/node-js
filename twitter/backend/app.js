import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import logger from "./middleware/logger.js";
import tweetrouts from "./routes/tweetroutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));
app.use(logger);
app.use("/api/tweets", tweetrouts);

app.listen(5000, () => {
    console.log("Server is running on port http://localhost:5000");
});
