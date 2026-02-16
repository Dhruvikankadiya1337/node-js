// Sidebar.jsx
import React from "react";

function Sidebar() {
  return (
    <div className="bg-light border-end vh-100 p-3" style={{width: "220px"}}>
      <h5>Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item"><a className="nav-link" href="/">Dashboard</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Menu</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Orders</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Users</a></li>
        <li className="nav-item"><a className="nav-link" href="/">Reports</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
