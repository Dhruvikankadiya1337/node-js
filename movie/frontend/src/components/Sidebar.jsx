import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">Mov</div>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" end className="s-link">Home</NavLink>
        <NavLink to="/add" className="s-link">Add Movie</NavLink>
        <NavLink to="/movies" className="s-link">All Movies</NavLink>
        <div className="s-link">Search Movie</div>
        <div className="s-link">Genres</div>
        <div className="s-link">Logout</div>
      </nav>
    </aside>
  );
}
