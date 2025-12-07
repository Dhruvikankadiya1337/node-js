// import moviemodel from "../models/moviemodel.js";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// export const addmovie = async (req, res) => {
//   try {
//     const movie = new movie({
//       title: req.body.title,
//       description: req.body.description,
//       genre: req.body.genre,
//       year: req.body.year,
//       poster: req.file?.filename,
//     });
//     await movie.save();
//     res.status(201).json(movie);
//   } catch (e) {
//     res.status(500).json({ message: "Error adding movie" });
//   }
// };

// export const getmovies = async(req , res) =>{
//     const movies = await movies.find();
//     res.json(movies);
// };

// export const getMovieById = async (req , res)=>{
//     const movie = await movie.findById();
//     res.json(movie);
// };

// export const uploadmovie = async (req , res)=>{
//     const movie = await movie.findById(req.params.id);

//     movie.title =  req.body.title;
//     movie.description = req.body.description;
//     movie.genre = req.body.genre;
//     movie.year = req.body.year;

//      if(req.file){
//             fs.unlinkSync(path.join (__dirname, "../uploads",  movie.poster));
//             movie.poster = req.file.filename;
//      }
//      await movie.save();
//      req.json(movie);
// };

// export const deleteMovie = async (req, res) => {
//   const movie = await Movie.findById(req.params.id);

//   fs.unlinkSync(path.join(__dirname, "../uploads", movie.poster));

//   await movie.deleteOne();
//   res.json({ message: "Movie deleted" });
// };




// import Movie from "../models/moviemodel.js";  
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// // ADD MOVIE
// export const addmovie = async (req, res) => {
//   try {
//     const movie = new Movie({
//       title: req.body.title,
//       description: req.body.description,
//       genre: req.body.genre,
//       year: req.body.year,
//       poster: req.file?.filename,
//     });

//     await movie.save();
//     res.status(201).json(movie);

//   } catch (error) {
//     res.status(500).json({ message: "Error adding movie" });
//   }
// };

// // GET ALL MOVIES
// export const getmovies = async (req, res) => {
//   const movies = await Movie.find();  // ✔ correct
//   res.json(movies);
// };

// // GET SINGLE MOVIE
// export const getMovieById = async (req, res) => {
//   const movie = await Movie.findById(req.params.id);  // ✔ correct
//   res.json(movie);
// };

// // UPDATE MOVIE
// export const uploadmovie = async (req, res) => {
//   const movie = await Movie.findById(req.params.id);

//   movie.title = req.body.title;
//   movie.description = req.body.description;
//   movie.genre = req.body.genre;
//   movie.year = req.body.year;

//   if (req.file) {
//     fs.unlinkSync(path.join(__dirname, "../uploads", movie.poster));
//     movie.poster = req.file.filename;
//   }

//   await movie.save();
//   res.json(movie);
// };

// // DELETE MOVIE
// export const deleteMovie = async (req, res) => {
//   const movie = await Movie.findById(req.params.id);

//   fs.unlinkSync(path.join(__dirname, "../uploads", movie.poster));

//   await movie.deleteOne();

//   res.json({ message: "Movie deleted" });
// };



import Movie from "../models/moviemodel.js";
import fs from "fs";
import path from "path";


export const createMovie = async (req, res) => {
    try {
        const movie = new Movie({
            title: req.body.title,
            description: req.body.description,
            genre: req.body.genre,
            releaseYear: req.body.releaseYear,
            poster: req.file ? req.file.filename : null
        });

        await movie.save();

        res.status(201).json({ message: "Movie added", movie });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addMovie = async (req, res) => {
  try {
    const movie = new Movie({
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,
      releaseYear: req.body.releaseYear,
      poster: req.file?.filename,
    });

    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: "Error adding movie" });
  }
};

export const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

export const getMovieById = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
};

export const updateMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  movie.title = req.body.title;
  movie.description = req.body.description;
  movie.genre = req.body.genre;
  movie.releaseYear = req.body.releaseYear;

  if (req.file) {
    fs.unlinkSync(`uploads/${movie.poster}`);
    movie.poster = req.file.filename;
  }

  await movie.save();
  res.json(movie);
};

export const deleteMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);

  fs.unlinkSync(`uploads/${movie.poster}`);

  await movie.deleteOne();
  res.json({ message: "Movie deleted" });
};

export const searchMovies = async (req, res) => {
  const q = req.query.title;

  const movies = await Movie.find({
    title: { $regex: q, $options: "i" },
  });

  res.json(movies);
};
