import { useState } from "react";
import { addMovie } from "../service/api.js";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", description: "", genre: "", releaseYear: "" });
  const [poster, setPoster] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFile = (e) => setPoster(e.target.files[0]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.genre || !form.releaseYear) {
      alert("Please fill Title, Genre and Release Year");
      return;
    }
    const data = new FormData();
    data.append("title", form.title);
    data.append("description", form.description);
    data.append("genre", form.genre);
    data.append("releaseYear", form.releaseYear);
    if (poster) data.append("poster", poster);

    try {
      setSubmitting(true);
      await addMovie(data);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Save failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="page-container narrow-form">
      <h2>Add Movie</h2>
      <form onSubmit={onSubmit} className="form">
        <label>Title</label>
        <input value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} />

        <label>Genre</label>
        <input value={form.genre} onChange={(e)=>setForm({...form,genre:e.target.value})} />

        <label>Release Year</label>
        <input type="number" value={form.releaseYear} onChange={(e)=>setForm({...form,releaseYear:e.target.value})} />

        <label>Description</label>
        <textarea value={form.description} onChange={(e)=>setForm({...form,description:e.target.value})} />

        <label>Poster Image</label>
        <input type="file" accept="image/*" onChange={handleFile} />

        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn-primary" type="submit" disabled={submitting}>{submitting ? "Saving..." : "Save Movie"}</button>
          <button type="button" className="btn-ghost" onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
