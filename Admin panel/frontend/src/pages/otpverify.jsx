import React, { useState } from 'react';
import OTPInput from "otp-input-react";
import axios from 'axios';
import { base_uri } from '../utils/global-variable.js';
import { useLocation, useNavigate } from 'react-router';

export default function VerifyOtp() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = async () => {
    try {
      const res = await axios.post(
        `${base_uri}/auth/otpverify`,
        { email: state, otp: Number(otp) },
        { withCredentials: true }
      );
      if (res.data.status) {
        alert(res.data.message);
        navigate("/home");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="verify-otp-wrapper vh-100 d-flex justify-content-center align-items-center">
      <div className="verify-otp-card shadow rounded p-5">
        <h2 className="verify-otp-title mb-4 text-center">Enter OTP</h2>

        <p className="text-center mb-4">Please enter the 6-digit code sent to your email</p>

        <div className="otp-input-wrapper d-flex justify-content-center mb-3">
          <OTPInput
            value={otp}
            onChange={setOtp}
            autoFocus
            OTPLength={6}
            otpType="number"
            disabled={false}
          />
        </div>

        <div className="text-end mb-4">
          <button
            className="btn btn-link p-0"
            onClick={() => alert("Resend OTP clicked")}
          >
            Resend OTP
          </button>
        </div>

        <button
          onClick={handleVerifyOtp}
          className="btn btn-primary w-100"
        >
          Verify & Sign In
        </button>
      </div>
    </div>
  );
}