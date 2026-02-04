import React, { useState } from "react";
import axios from "axios";
import { base_uri } from "../utils/global-variable.js";
import { Link, useNavigate } from "react-router";
import "../css/signin.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const user = { email, password };
      const res = await axios.post(`${base_uri}/Signin`, user);
      alert(res.data.message);
       if (res.data.status) {
        // navigate("/dashboard");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className=" container-fluid d-flex justify-content-center align-items-center signin-wrapper">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-sm-10 col-md-6 col-lg-5 col-xl-4 signin-card">

          <h2 className="text-center mb-4">Sign In</h2>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="link-right mb-2">
            <Link to="/forget password">Forgt password</Link>
          </div>

          <button onClick={handleSignin} className="btn btn-primary w-100">
            Sign In
          </button>

           <div className="link-right mb-2">
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </div>

        </div>
      </div>
    </div>
  );
}