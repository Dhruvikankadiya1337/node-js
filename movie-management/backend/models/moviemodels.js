import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: String,
  releaseYear: Number,
  poster: String
});

export default mongoose.model("Movie", movieSchema);
