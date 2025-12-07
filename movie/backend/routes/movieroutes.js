// import express from "express";
// import upload from "../middleware/upload.js";
// import { addmovie,
//          getmovies,
//          getMovieById,
//         uploadmovie,
//           deleteMovie 
//         } from "../controllers/movieController.js";

// const router = express.Router();

// router.post("/", upload.single("poster"), addmovie);
// router.get("/", getmovies);
// router.get("/:id", getMovieById);
// router.put("/:id", upload.single("poster"), uploadmovie);
// router.delete("/:id", deleteMovie);

// export default router;



import express from "express";
import upload from "../middleware/upload.js";
import {
  addMovie,
  getMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
  searchMovies,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/search", searchMovies);
router.get("/:id", getMovieById);
router.post("/", upload.single("poster"), addMovie);
router.post("/add", upload.single("poster"), createMovie);
router.put("/:id", upload.single("poster"), updateMovie);
router.delete("/:id", deleteMovie);

export default router;
