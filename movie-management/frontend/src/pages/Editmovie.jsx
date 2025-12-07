import { useEffect, useState } from "react";
import { getMovieById, updateMovie } from "../service/api.js";
import { useNavigate, useParams } from "react-router-dom";

export default function EditMovie() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [poster, setPoster] = useState(null);
  const [saving, setSaving] = useState(false);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", movie.title);
    form.append("description", movie.description || "");
    form.append("genre", movie.genre || "");
    form.append("releaseYear", movie.releaseYear || "");
    if (poster) form.append("poster", poster);

    try {
      setSaving(true);
      await updateMovie(id, form);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="page-container narrow-form">
      <h2>Edit Movie</h2>
      <form onSubmit={onSubmit} className="form">
        <label>Title</label>
        <input value={movie.title} onChange={(e)=>setMovie({...movie,title:e.target.value})} />

        <label>Genre</label>
        <input value={movie.genre || ""} onChange={(e)=>setMovie({...movie,genre:e.target.value})} />

        <label>Release Year</label>
        <input type="number" value={movie.releaseYear || ""} onChange={(e)=>setMovie({...movie,releaseYear:e.target.value})} />

        <label>Description</label>
        <textarea value={movie.description || ""} onChange={(e)=>setMovie({...movie,description:e.target.value})} />

        <label>Replace Poster (optional)</label>
        <input type="file" accept="image/*" onChange={(e)=>setPoster(e.target.files[0])} />

        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn-primary" type="submit" disabled={saving}>{saving ? "Saving..." : "Update Movie"}</button>
          <button type="button" className="btn-ghost" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
