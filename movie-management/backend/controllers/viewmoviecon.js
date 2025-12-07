import Movie from "../models/moviemodels.js";

export const viewMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
};
