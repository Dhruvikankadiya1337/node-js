import React from "react";
import MovieCard from "../components/MovieCard";
import "../styles/grid.css";

export default function MovieRow({ movies = [], onDelete }) {
  return (
    <div className="movie-row">
      {movies.map(m => <MovieCard key={m._id} movie={m} onDelete={onDelete} />)}
    </div>
  );
}
