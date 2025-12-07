import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";

export default function MovieCard({ movie, onDelete }) {

  if (!movie || !movie.title) return null;

  const posterUrl = movie.poster
    ? `http://localhost:5000/uploads/${movie.poster}`
    : movie.posterUrlFallback || "";

  return (
    <div className="movie-card">
      <div className="poster-wrap">
        {posterUrl ? (
          <img src={posterUrl} alt={movie.title} className="poster-img" />
        ) : (
          <div className="poster-placeholder">No Image</div>
        )}
      </div>

      <div className="card-body">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-meta">{movie.genre} • {movie.releaseYear}</p>

        <div className="card-actions">
          <Link className="btn btn-view" to={`/view/${movie._id}`}>
            <FaEye />
          </Link>
          <Link className="btn btn-edit" to={`/edit/${movie._id}`}>
            <FaEdit />
          </Link>
          <button className="btn btn-delete" onClick={() => onDelete(movie._id)}>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
}
