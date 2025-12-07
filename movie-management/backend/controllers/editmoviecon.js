import Movie from "../models/moviemodels.js";

export const editMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
};
