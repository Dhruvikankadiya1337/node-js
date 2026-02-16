import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { base_uri } from "../utils/globalfunction";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${base_uri}/auth/login`, { email, password });
      if (res.data.status) {
        setUser(res.data.user);
        localStorage.setItem("token", res.data.token);
        navigate("/otp-verify");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Login failed");
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
