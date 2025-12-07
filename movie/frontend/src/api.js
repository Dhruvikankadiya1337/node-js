const BASE = "http://localhost:5000/api/movies";

export async function fetchAllMovies() {
  const res = await fetch(BASE);
  return res.json();
}

export async function fetchMovie(id) {
  const res = await fetch(`${BASE}/${id}`);
  return res.json();
}

// Search by title (backend uses ?title=)
export async function searchMovies(title = "") {
  const url = title ? `${BASE}?title=${encodeURIComponent(title)}` : BASE;
  const res = await fetch(url);
  return res.json();
}

export async function createMovie(formData) {
  const res = await fetch(BASE, { method: "POST", body: formData });
  return res.json();
}

export async function updateMovie(id, formData) {
  const res = await fetch(`${BASE}/${id}`, { method: "PUT", body: formData });
  return res.json();
}

export async function deleteMovie(id) {
  const res = await fetch(`${BASE}/${id}`, { method: "DELETE" });
  return res.json();
}
