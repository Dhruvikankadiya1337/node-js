import { useEffect, useState } from "react";

const API = "http://localhost:5000/api";

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${API}/blogs`)
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <>
      <nav>
        <h2>Blog Management System</h2>
        <div>
          <a href="/src/pages/login.html">Login</a>
          <a href="/src/pages/register.html">Register</a>
          <a href="/src/pages/blog.html">Blog</a>
        </div>
      </nav>

      <div className="blogs">
        {blogs.map(blog => (
          <div className="blog" key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <small>Author: {blog.author?.name}</small>
            {blog.image && (
              <img
                src={`http://localhost:5000/${blog.image}`}
                alt="blog"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;