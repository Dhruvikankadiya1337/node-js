import React from "react";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <h2 className="logo">Twitter</h2>

      <div className="left-menu">
        <div className="menu-item"><span className="icon">🏠</span> Home</div>
        <div className="menu-item"><span className="icon">🔍</span> Explore</div>
        <div className="menu-item"><span className="icon">🔔</span> Notifications</div>
        <div className="menu-item"><span className="icon">✉️</span> Messages</div>
        <div className="menu-item"><span className="icon">📁</span> Lists</div>
        <div className="menu-item"><span className="icon">👤</span> Profile</div>
        <div className="menu-item"><span className="icon">⚙️</span> Settings</div>
      </div>

      <button className="tweet-btn">Tweet</button>
    </div>
  );
};

export default LeftSidebar;