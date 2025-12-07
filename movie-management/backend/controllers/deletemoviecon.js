import Movie from "../models/moviemodels.js";
import fs from "fs";
import path from "path";

export const deleteMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) return res.status(404).json("Movie not found");

  fs.unlinkSync(path.join("uploads", movie.poster));
  await movie.deleteOne();

  res.json({ message: "Movie deleted" });
};
