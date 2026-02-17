import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/globalfunction";
import "../style/verifyotp.css"; // custom CSS

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp) return alert("OTP is required");

    try {
      const res = await axios.post(`${BASE_URL}/otp/verify-otp`, { email, otp });
      alert(res.data.message);
      if (res.data.status) navigate("/change-password", { state: { email } });
    } catch (err) {
      console.log(err);
      alert("OTP verification failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Verify OTP</h2>
        <form onSubmit={handleVerify}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
        <p className="auth-links">
          Didn’t receive OTP? <a href="/forget-password">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default VerifyOTP;
