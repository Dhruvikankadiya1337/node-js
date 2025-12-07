import { useState } from "react";
import MovieForm from "../components/MovieForm";

function AddMovie() {
  const [movie, setMovie] = useState({ title: "", rating: "" });

  function handleChange(e) {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie)
    });

    alert("Movie Added!");
  }

  return (
    <>
      <h2>Add Movie</h2>
      <MovieForm movie={movie} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  );
}

export default AddMovie;
