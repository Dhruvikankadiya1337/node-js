import React, { useState } from "react";
import axios from "axios";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [poster, setPoster] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ⭐ FORM-DATA CREATE
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("genre", genre);
    formData.append("releaseYear", releaseYear);
    formData.append("poster", poster);

    try {
      const res = await axios.post("http://localhost:5000/api/movies", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

      alert("Movie added successfully!");
      console.log(res.data);

    } catch (err) {
      console.error(err);
      alert("Error adding movie");
    }
  };

  return (
    <div className="add-container">
      <h1>Add New Movie</h1>

      <form onSubmit={handleSubmit} className="movie-form">

        <label>Movie Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

        <label>Genre</label>
        <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} required />

        <label>Release Year</label>
        <input type="number" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />

        <label>Movie Poster</label>
        <input type="file" accept="image/*" onChange={(e) => setPoster(e.target.files[0])} required />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
