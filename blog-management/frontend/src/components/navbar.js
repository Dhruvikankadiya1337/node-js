
const navLinks = document.getElementById("navLinks");

export function updateNavbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    navLinks.innerHTML = `
      <button id="addBlogBtn">+ Add Blog</button>
      <button id="logoutBtn">Logout</button>
    `;

    document.getElementById("addBlogBtn").addEventListener("click", () => {
      window.location.href = "blog.html";
    });

    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("isLoggedIn");
      alert("Logged out successfully!");
      updateNavbar();
      window.location.href = "login.html";
    });

  } else {
    navLinks.innerHTML = `
      <button id="registerBtn">Register</button>
      <button id="loginBtn">Login</button>
    `;

    document.getElementById("registerBtn").addEventListener("click", () => {
      window.location.href = "register.html";
    });

    document.getElementById("loginBtn").addEventListener("click", () => {
      window.location.href = "login.html";
    });
  }
}
