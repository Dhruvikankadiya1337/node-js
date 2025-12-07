import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h2>Loading...</h2>;

  return (
    <div className="details-container">
      
      <img
        src={`http://localhost:5000/uploads/${movie.poster}`}
        alt={movie.title}
        className="details-poster"
      />

      <div className="details-info">
        <h1>{movie.title}</h1>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Release Year:</strong> {movie.releaseYear}</p>
        <p><strong>Description:</strong> {movie.description}</p>
      </div>

    </div>
  );
};

export default Moviedetails;
