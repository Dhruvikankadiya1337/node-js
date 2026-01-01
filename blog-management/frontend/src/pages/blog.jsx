import { useEffect, useState } from "react";
import { getAllBlogs } from "../services/blogservice.js";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogs().then(res => setBlogs(res.data));
  }, []);

  return (
    <div className="blog-container">
      {blogs.map(blog => (
        <div className="blog-card" key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
