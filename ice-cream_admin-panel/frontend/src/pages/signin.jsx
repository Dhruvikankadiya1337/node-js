import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/globalfunction";
import "../style/signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${BASE_URL}/auth/signin`, {
        email,
        password,
      });

      if (res.data.status) {
        alert("Signin successful");
        navigate("/home");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log(err);
      alert("Signin failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign in</h2>
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
          <button type="submit">Sign in</button>
        </form>
        <p className="auth-links">
          Don’t have an account? <a href="/signup">Signup</a>
        </p>
        <p className="auth-links">
          <a href="/forget-password">Forget password?</a>
        </p>
      </div>
    </div>
  );
};

export default Signin;
