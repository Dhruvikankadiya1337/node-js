import Blog from "../models/blog.js";

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create({
      title: req.body.title,
      content: req.body.content,
      image: req.file ? req.file.filename : null, // <-- yaha filename save karenge
      author: req.user.id
    });

    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET BLOGS
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name");
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.author.toString() !== req.user.id) {
      return res.status(403).json({ message: "Access Denied" });
    }

    await blog.deleteOne();
    res.json({ message: "Blog Deleted Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
