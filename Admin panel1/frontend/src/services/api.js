import axios from "axios";
import { BASE_URL } from "../utils/globalfunction.js";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
