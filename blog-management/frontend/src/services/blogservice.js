import axios from "axios";

const API = "http://localhost:5000/api/blogs";

export const getAllBlogs = () => axios.get(API);

export const createBlog = (data) =>
  axios.post(API, data, { withCredentials: true });

export const updateBlog = (id, data) =>
  axios.put(`${API}/${id}`, data, { withCredentials: true });

export const deleteBlog = (id) =>
  axios.delete(`${API}/${id}`, { withCredentials: true });

