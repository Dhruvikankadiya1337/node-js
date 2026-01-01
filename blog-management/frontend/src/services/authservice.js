import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const registerUser = (data) =>
  axios.post(`${API}/register`, data, { withCredentials: true });

export const loginUser = (data) =>
  axios.post(`${API}/login`, data, { withCredentials: true });

export const logoutUser = () =>
  axios.post(`${API}/logout`, {}, { withCredentials: true });
