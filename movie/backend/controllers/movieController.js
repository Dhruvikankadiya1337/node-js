import moviemodel from "../models/moviemodel.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const addmovie = async (req, res) => {
  try {
    const movie = new movie({
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,
      year: req.body.year,
      poster: req.file?.filename,
    });
    await movie.save();
    res.status(201).json(movie);
  } catch (e) {
    res.status(500).json({ message: "Error adding movie" });
  }
};

export const getmovies = async(req , res) =>{
    const movies = await movies.find();
    res.json(movies);
};

export const getMovieById = async (req , res)=>{
    const movie = await movie.findById();
    res.json(movie);
};

export const uploadmovie = async (req , res)=>{
    const movie = await movie.findById(req.params.id);

    movie.title =  req.body.title;
    movie.description = req.body.description;
    movie.genre = req.body.genre;
    movie.year = req.body.year;
        
}
