const blogsContainer = document.getElementById("blogsContainer");
const API = "http://localhost:5000/api";

async function loadBlogs() {
  try {
    const res = await fetch(`${API}/blogs`);
    const blogs = await res.json();

    blogsContainer.innerHTML = blogs.map(blog => `
      <div class="blog-card">
        <h3>${blog.title}</h3>
        <p>${blog.content}</p>
        ${blog.image ? `<img src="http://localhost:5000/uploads/blog/${blog.image}" alt="${blog.title}" />` : ""}
      </div>
    `).join("");
  } catch (err) {
    blogsContainer.innerHTML = "<p>Failed to load blogs</p>";
    console.error(err);
  }
}

loadBlogs();
