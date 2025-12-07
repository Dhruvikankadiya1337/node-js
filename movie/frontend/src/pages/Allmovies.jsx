import React, { useEffect, useState } from "react";
import { searchMovies } from "../api";
import MovieCard from "../components/Moviecard.jsx"; 


export default function AllMovies() {
  const [q, setQ] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let mounted = true;
    const t = setTimeout(() => {
      searchMovies(q).then(data => { if (mounted) setMovies(data); }).catch(console.error);
    }, 250);
    return () => { mounted = false; clearTimeout(t); };
  }, [q]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete movie?")) return;
    await fetch(`http://localhost:5000/api/movies/${id}`, { method: "DELETE" });
    setMovies(prev => prev.filter(m => m._id !== id));
  };

  return (
    <div className="all-movies container">
      <div className="top-row">
        <h2>All Movies</h2>
        <input className="search-input" placeholder="Search by title..." value={q} onChange={(e) => setQ(e.target.value)} />
      </div>

      <div className="movies-grid">
       {movies.map((movie) => (
  <MovieCard key={movie._id} movie={movie} />
))}

      </div>
    </div>
  );
}
