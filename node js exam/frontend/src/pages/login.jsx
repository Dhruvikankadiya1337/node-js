import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/login.css"

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        form
      );

      if (res.data.status) {
        localStorage.setItem("token", res.data.token);
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert("Login failed");
    }
  };

return (
  <div className="login-container">
    <div className="login-card">
      <h2 className="login-title">Login</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <div className="login-field">
          <label className="login-label">Email</label>
          <input
            type="email"
            name="email"
             placeholder="Email"
            onChange={handleChange}
            className="login-input"
          />
        </div>

       <div className="login-field">
          <label className="login-label">Password</label>
          <input
            type="password"
            name="password"
             placeholder="Password"
            onChange={handleChange}
            className="login-input"
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>

      <p
        className="login-link"
        onClick={() => navigate("/register")}
      >
        Don't have account? Register
      </p>
    </div>
  </div>
);
}

export default Login;