import React from "react";

const Moviecard = ({ movie }) => {
  return (
    <div className="movie-card">

      <img
        src={`http://localhost:5000/uploads/${movie.poster}`}
        alt={movie.title}
        className="movie-img"
      />

      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.genre}</p>
        <p>{movie.releaseYear}</p>
      </div>

    </div>
  );
};

export default Moviecard;
