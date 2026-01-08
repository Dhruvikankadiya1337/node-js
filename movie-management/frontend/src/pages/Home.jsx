import { useEffect, useState, useCallback } from "react";
import { fetchMovies, deleteMovie } from "../service/api.js";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  // Load all movies from API
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetchMovies();
      setMovies(res.data || []);
      setFiltered(res.data || []);
    } catch (err) {
      console.error(err);
      setMovies([]);
      setFiltered([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  // Filter movies locally based on query
  useEffect(() => {
    if (!query) {
      setFiltered(movies);
    } else {
      const q = query.toLowerCase();
      setFiltered(
        movies.filter((m) => m.title.toLowerCase().includes(q))
      );
    }
  }, [query, movies]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this movie?")) return;
    try {
      await deleteMovie(id);
      load();
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
        <button className="search-btn" onClick={() => setQuery(query)}>
          Search
        </button>

        <button className="btn-add" onClick={() => navigate("/add")}>
          + Add Movie
        </button>
      </div>

      {loading && <p className="muted">Loading...</p>}

      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((m) => (
            <MovieCard key={m._id} movie={m} onDelete={handleDelete} />
          ))
        ) : (
          <p className="muted">No movies found.</p>
        )}
      </div>
    </div>
  );
}
