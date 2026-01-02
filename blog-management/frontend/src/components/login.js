
const API = "http://localhost:5000/api";
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async e => {
  e.preventDefault();

  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value
    })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert(data.message || "Login failed!");
  }
});
