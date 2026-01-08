import { Link } from "react-router-dom";
import "../styles/theme.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">🎬 Movie Manager</h2>

      <div className="navbar-actions">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/add" className="nav-link add-movie">+ Add Movie</Link>
      </div>
    </nav>
  );
}
