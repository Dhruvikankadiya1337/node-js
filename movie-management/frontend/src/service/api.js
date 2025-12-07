import axios from "axios";

const API_BASE = "http://localhost:5000/api/movies";

export const fetchMovies = (query = "") =>
  axios.get(query ? `${API_BASE}?title=${encodeURIComponent(query)}` : API_BASE);

export const getMovieById = (id) => axios.get(`${API_BASE}/${id}`);

export const addMovie = (formData) =>
  axios.post(API_BASE, formData, { headers: { "Content-Type": "multipart/form-data" } });

export const updateMovie = (id, formData) =>
  axios.put(`${API_BASE}/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" } });

export const deleteMovie = (id) => axios.delete(`${API_BASE}/${id}`);
