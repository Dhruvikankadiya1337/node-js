import { useEffect, useState } from "react";
import { getMovieById } from "../service/api.js";
import { useParams, useNavigate } from "react-router-dom";

export default function ViewMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getMovieById(id);
        setMovie(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to load");
      }
    })();
  }, [id]);

  if (!movie) return <p className="muted">Loading...</p>;

  const poster = movie.poster ? `http://localhost:5000/uploads/${movie.poster}` : null;

  return (
    <div className="page-container narrow-form">
      <button className="btn-ghost" onClick={() => navigate(-1)}>← Back</button>
      <div style={{ display: "flex", gap: 20, marginTop: 10 }}>
        <div style={{ width: 260 }}>
          {poster ? <img src={poster} alt={movie.title} style={{ width: "100%", borderRadius: 8 }} /> : <div className="poster-placeholder">No Image</div>}
        </div>
        <div>
          <h2>{movie.title}</h2>
          <p className="movie-meta">{movie.genre} • {movie.releaseYear}</p>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
}
