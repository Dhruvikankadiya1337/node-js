import React, { useEffect, useState } from "react";
import { fetchAllMovies } from "../api";
import MovieRow from "../components/Movierow";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAllMovies().then(setMovies).catch(console.error);
  }, []);

  const trending = movies.slice(0, 6);
  const latest = movies.slice(6, 12);
  const topRated = movies.slice(12, 18);

  const handleDelete = (id) => {
    if (!window.confirm("Delete this movie?")) return;
    fetch(`http://localhost:5000/api/movies/${id}`, { method: "DELETE" })
      .then(() => setMovies(prev => prev.filter(m => m._id !== id)));
  };

  return (
    <main className="home container">
      <h1 className="hero-title">Movie Management System</h1>

      <section>
        <h2 className="section-title">Trending Movies</h2>
        <MovieRow movies={trending} onDelete={handleDelete} />
      </section>

      <section>
        <h2 className="section-title">Latest Releases</h2>
        <MovieRow movies={latest} onDelete={handleDelete} />
      </section>

      <section>
        <h2 className="section-title">Top Rated</h2>
        <MovieRow movies={topRated} onDelete={handleDelete} />
      </section>
    </main>
  );
}
