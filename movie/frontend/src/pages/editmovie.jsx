import React, { useEffect, useState } from "react";
import { fetchMovie, updateMovie } from "../api";
import { useParams } from "react-router-dom";

export default function EditMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie(id).then(setMovie).catch(console.error);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await updateMovie(id, fd);
    alert("Updated");
    window.location.href = `/movie/${id}`;
  };

  if (!movie) return <div className="container">Loading...</div>;

  return (
    <div className="form-container container">
      <h2>Edit Movie</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>Title</label>
        <input name="title" defaultValue={movie.title} required />

        <label>Description</label>
        <textarea name="description" defaultValue={movie.description} required />

        <label>Genre</label>
        <input name="genre" defaultValue={movie.genre} required />

        <label>Release Year</label>
        <input name="year" type="number" defaultValue={movie.year} required />

        <label>Replace Poster (optional)</label>
        <input name="poster" type="file" accept="image/*" />

        <button className="submit-btn">Save Changes</button>
      </form>
    </div>
  );
}
