import { useState, useContext } from "react";
import { loginUser } from "../services/authservice.js";
import { AuthContext } from "../context/authcontext.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    await loginUser(form);
    login();
    navigate("/");
  };

  return (
    <div className="form-page">
      <form className="form-card" onSubmit={submit}>
        <h2>Login</h2>
        <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
        <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
