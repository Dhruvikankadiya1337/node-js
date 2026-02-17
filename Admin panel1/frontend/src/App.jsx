import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup'
import Login from "./pages/login";
import ForgotPassword from "./pages/forgetpassword";
import OtpVerify from "./pages/otpverify";
import Dashboard from "./pages/dashboard";
import Menu from "./pages/menu";
import Orders from "./pages/order";
import Users from "./pages/user";
import Reports from "./pages/reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verify" element={<OtpVerify />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;