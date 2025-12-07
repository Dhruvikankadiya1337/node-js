import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: String,
  year: Number,
  poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;  



// import mongoose from "mongoose";

// const movieSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     genre: { type: String, required: true },
//     releaseYear: { type: Number, required: true },
//     poster: { type: String }, // only filename
//   },
//   { timestamps: true }
// );

// const Movie = mongoose.model("Movie", movieSchema);

// export default Movie;
