import Movie from "../models/moviemodels.js";

export const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create({
      ...req.body,
      poster: req.file?.filename
    });

    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
