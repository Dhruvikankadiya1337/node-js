import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">🎬 Movie Manager</div>
      <nav className="nav">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/add" className="nav-link">Add Movie</NavLink>
      </nav>
      <div className="sidebar-footer">Your Project</div>
    </aside>
  );
}
