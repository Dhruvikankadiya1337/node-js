// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <>

      {/* LEFT SIDEBAR */}
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

      {/* RIGHT SIDEBAR */}
      <div className="right-sidebar">
        <div className="search-box">
          <input type="text" placeholder="Search Twitter" />
        </div>

        <div className="trending-box">
          <h3>Trends for you</h3>
          <div className="trend">
            <p className="trend-category">Trending in India</p>
            <p className="trend-name">#BreakingNews</p>
            <p className="trend-tweets">120K Tweets</p>
          </div>
          <div className="trend">
            <p className="trend-category">Sports · Trending</p>
            <p className="trend-name">#INDvsAUS</p>
            <p className="trend-tweets">89K Tweets</p>
          </div>
          <div className="trend">
            <p className="trend-category">Entertainment</p>
            <p className="trend-name">#SalmanKhan</p>
            <p className="trend-tweets">45K Tweets</p>
          </div>
          <div className="trend">
            <p className="trend-category">Tech</p>
            <p className="trend-name">#OpenAI</p>
            <p className="trend-tweets">60K Tweets</p>
          </div>
        </div>

        <div className="follow-box">
          <h3>Who to follow</h3>
          <div className="follow-user">
            <img src="https://i.pravatar.cc/40?img=10" className="follow-avatar" />
            <div>
              <p className="follow-name">Aarav</p>
              <p className="follow-username">@aarav123</p>
            </div>
            <button className="follow-btn">Follow</button>
          </div>

          <div className="follow-user">
            <img src="https://i.pravatar.cc/40?img=12" className="follow-avatar" />
            <div>
              <p className="follow-name">Riya</p>
              <p className="follow-username">@riyadev</p>
            </div>
            <button className="follow-btn">Follow</button>
          </div>

          <div className="follow-user">
            <img src="https://i.pravatar.cc/40?img=14" className="follow-avatar" />
            <div>
              <p className="follow-name">Harsh</p>
              <p className="follow-username">@harsh_99</p>
            </div>
            <button className="follow-btn">Follow</button>
          </div>
        </div>
      </div>

    </>
  );
}

export default Sidebar;
