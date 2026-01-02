const API = "http://localhost:5000/api";
const blogForm = document.getElementById("blogForm");
const title = document.getElementById("title");
const content = document.getElementById("content");
const image = document.getElementById("image");

blogForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("content", content.value);
  formData.append("image", image.files[0]);

  try {
    const res = await fetch(`${API}/blogs`, {
      method: "POST",
      credentials: "include",
      body: formData
    });

    const data = await res.json();

    if(res.ok){
      alert("Blog Created Successfully");
      location.href = "index.html";
    } else {
      alert(data.message || "Failed to create blog");
    }

  } catch(err){
    alert("Server Error: "+err.message);
  }
});
