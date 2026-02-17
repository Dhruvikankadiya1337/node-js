import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/globalfunction";
import { useNavigate } from "react-router-dom";
import "../style/forgetpassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async (e) => {
    e.preventDefault();
    if (!email) return alert("Email is required");

    try {
      const res = await axios.post(`${BASE_URL}/otp/forget-password`, { email });
      alert(res.data.message);
      if (res.data.status) navigate("/verify-otp", { state: { email } });
    } catch (err) {
      console.log(err);
      alert("Failed to send OTP");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forget Password</h2>
        <form onSubmit={handleSendOTP}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send OTP</button>
        </form>
        <p className="auth-links">
          Remembered your password? <a href="/signin">Signin</a>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
