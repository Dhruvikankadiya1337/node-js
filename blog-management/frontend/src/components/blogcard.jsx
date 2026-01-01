import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <img src={`http://localhost:5000/${blog.image}`} alt={blog.title} />
      <h3>{blog.title}</h3>
      <p>{blog.content.substring(0, 100)}...</p>
      <Link to={`/edit-blog/${blog._id}`}>Edit</Link>
    </div>
  );
};

export default BlogCard;
