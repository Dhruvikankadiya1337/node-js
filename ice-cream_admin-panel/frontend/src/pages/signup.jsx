import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/globalfunction";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "../style/signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password & Confirm Password not matched");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/auth/signup`, {
        email,
        password,
        confirmPassword,
      });

      if (res.data.status) {
        alert("Signup successful");
        navigate("/signin");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
        <p className="auth-links">
          Already have an account? <a href="/signin">Signin</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
