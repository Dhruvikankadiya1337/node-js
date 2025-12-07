import express from "express";
import multer from "multer";

import { getMovies } from "../controllers/getmoviecon.js";
import { addMovie } from "../controllers/addmoviecon.js";
import { editMovie } from "../controllers/editmoviecon.js";
import { updateMovie } from "../controllers/updatemoviecon.js";
import { deleteMovie } from "../controllers/deletemoviecon.js";
import { viewMovie } from "../controllers/viewmoviecon.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({ storage });

router.get("/", getMovies);
router.get("/:id", viewMovie);
router.post("/", upload.single("poster"), addMovie);
router.put("/:id", upload.single("poster"), updateMovie);
router.delete("/:id", deleteMovie);

export default router;
