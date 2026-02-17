// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/authcontext";
// import { BASE_URL } from "../utils/globalfunction";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { setUser } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${BASE_URL}/auth/login`, { email, password });
//       if (res.data.status) {
//         setUser(res.data.user);
//         localStorage.setItem("token", res.data.token);
//         navigate("/otp-verify");
//       } else {
//         alert(res.data.message);
//       }
//     } catch (err) {
//       alert("Login failed");
//       console.log(err);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label>Email</label>
//           <input type="email" className="form-control" required value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input type="password" className="form-control" required value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState, useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { BASE_URL } from "../utils/globalfunction";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      if (res.data.status) {
        loginUser(res.data.user, res.data.token);
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
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <p className="text-center mt-3">
            Don’t have an account?{" "}
            <span
              style={{ cursor: "pointer", color: "blue" }}
              onClick={() => navigate("/")}
            >
              Signup
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
