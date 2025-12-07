import Movie from "../models/moviemodels.js";
import fs from "fs";
import path from "path";

export const updateMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) return res.status(404).json("Movie not found");

  if (req.file && movie.poster) {
    fs.unlinkSync(path.join("uploads", movie.poster));
    movie.poster = req.file.filename;
  }

  movie.title = req.body.title;
  movie.description = req.body.description;
  movie.genre = req.body.genre;
  movie.releaseYear = req.body.releaseYear;

  await movie.save();
  res.json(movie);
};
