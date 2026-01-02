
const API = "http://localhost:5000/api";
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`${API}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value
      }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Registered successfully!");
      window.location.href = "login.html";
    } else {
      alert(data.message || "Something went wrong!");
    }
  } catch (err) {
    alert("Server error: " + err.message);
  }
});
