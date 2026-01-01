import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend port 5000
  withCredentials: true, // cookies ke liye
});

export default API;
