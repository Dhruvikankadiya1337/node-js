import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/globalfunction";
import "../style/changepassword.css";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) return alert("All fields required");
    if (password !== confirmPassword) return alert("Passwords do not match");

    try {
      const res = await axios.post(`${BASE_URL}/otp/change-password`, {
        email,
        password,
        confirmPassword
      });
      alert(res.data.message);
      if (res.data.status) navigate("/signin");
    } catch (err) {
      console.log(err);
      alert("Failed to change password");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Change Password</h2>
        <form onSubmit={handleChangePassword}>
          <input
            type="password"
            placeholder="New Password"
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
          <button type="submit">Change Password</button>
        </form>
        <p className="auth-links">
          Remembered your password? <a href="/signin">Signin</a>
        </p>
      </div>
    </div>
  );
};

export default ChangePassword;
