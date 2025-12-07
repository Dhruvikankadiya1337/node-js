import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ background: "#111", padding: "15px", display: "flex", justifyContent: "space-between" }}>
      <h2>🎬 Movie Manager</h2>
      <div>
        <Link to="/" style={{ marginRight: 20, color: "white" }}>Home</Link>
        <Link to="/add" style={{ color: "#ffb703" }}>+ Add Movie</Link>
      </div>
    </div>
  );
}
