import mongoose from "mongoose";

const movieschema  = mongoose.Schema({
    title: String,
    Description : String,
    Genre : string,
    ReleaseYear : Number,
    poster : string,
});

const movie = mongoose.model("movie" , movieschema);

export default moviemodel();