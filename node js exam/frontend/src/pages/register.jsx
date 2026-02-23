import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/register.css"

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        form
      );

      alert(res.data.message);

      if (res.data.status) {
        navigate("/");
      }
    } catch (error) {
      alert("Register failed");
    }
  };

 return (
  <div className="register-container">
    <div className="register-card">
      <h2 className="register-title">Register</h2>

      <form onSubmit={handleSubmit} className="register-form">
        
        <div className="register-field">
          <label className="register-label">Email</label>
          <input
            type="email"
            name="email"
             placeholder="Email"
            onChange={handleChange}
            className="register-input"
          />
        </div>

          <div className="register-field">
          <label className="register-label">Password</label>
          <input
            type="password"
            name="password"
             placeholder="Password"
            onChange={handleChange}
            className="register-input"
          />
        </div>

         <div className="register-field">
          <label className="register-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmpassword"
            onChange={handleChange}
            className="register-input"
          />
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>

      <p
        className="register-link"
        onClick={() => navigate("/")}
      >
        Already have account? Login
      </p>
    </div>
  </div>
);
}

export default Register;