import Movie from "../models/moviemodels.js";

export const getMovies = async (req, res) => {
  const search = req.query.search || "";
  const movies = await Movie.find({ title: { $regex: search, $options: "i" } });

  res.json(movies);
};
