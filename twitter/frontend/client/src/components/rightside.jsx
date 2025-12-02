import React from "react";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search Twitter" />
      </div>

      {/* Trending Section */}
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

      {/* Who to Follow */}
      <div className="follow-box">
        <h3>Who to follow</h3>
        <div className="follow-user">
          <img src="https://i.pravatar.cc/40?img=10" className="follow-avatar" alt="Aarav"/>
          <div>
            <p className="follow-name">Aarav</p>
            <p className="follow-username">@aarav123</p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
        <div className="follow-user">
          <img src="https://i.pravatar.cc/40?img=12" className="follow-avatar" alt="Riya"/>
          <div>
            <p className="follow-name">Riya</p>
            <p className="follow-username">@riyadev</p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
        <div className="follow-user">
          <img src="https://i.pravatar.cc/40?img=14" className="follow-avatar" alt="Harsh"/>
          <div>
            <p className="follow-name">Harsh</p>
            <p className="follow-username">@harsh_99</p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;