import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { BASE_URL } from "../utils/globalfunction";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/otp/verify-otp`, {
        userId: user._id, 
        otp,
      });

      if (res.data.status) {
        alert(res.data.message);
        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("OTP verification failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">OTP Verification</h2>
      <form onSubmit={handleVerify}>
        <div className="mb-3">
          <label>Enter OTP</label>
          <input
            type="text"
            className="form-control"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Verify
        </button>
      </form>
    </div>
  );
};

export default OtpVerify;
