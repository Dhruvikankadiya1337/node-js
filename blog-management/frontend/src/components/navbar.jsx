import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext.jsx";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h2 className="logo">Blog App</h2>

      <div className="nav-links">
        {!isAuthenticated ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </>
        ) : (
          <>
            <Link to="/add" className="btn">Add Blog</Link>
            <button onClick={logout} className="btn logout">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
