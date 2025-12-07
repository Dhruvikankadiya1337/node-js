import { useEffect, useState, useCallback } from "react";
import { fetchMovies, deleteMovie } from "../service/api.js";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const load = useCallback(async (q = "") => {
    setLoading(true);
    try {
      const res = await fetchMovies(q);
      setMovies(res.data || []); 
    } catch (err) {
      console.error(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    const timeout = setTimeout(() => load(query), 300);
    return () => clearTimeout(timeout);
  }, [query, load]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this movie?")) return;
    try {
      await deleteMovie(id);
      load(query);
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

 return (
  <div className="page-container">
    <div className="top-row">
      <input
        className="search-small"
        placeholder="Search by title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn-add" onClick={() => navigate("/add")}>
        + Add Movie
      </button>
    </div>

    {loading && <p className="muted">Loading...</p>}

    <div className="grid">
      {movies.length > 0 &&
        movies.map((m) => (
          <MovieCard key={m._id} movie={m} onDelete={handleDelete} />
        ))}
    </div>
  </div>
);

}
