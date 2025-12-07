import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <div className="brand">Mov</div>
        <div className="header-title">Movie Management System</div>
      </div>

      <div className="nav-center">
        <input id="globalSearch" className="search-input" placeholder="Search Movies..." />
      </div>

      <div className="nav-right" />
    </header>
  );
}
