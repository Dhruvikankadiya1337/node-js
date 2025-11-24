import React from "react";
import Tweet from "./tweet";
import React, { useState } from "react";


const TweetList = ({ tweets }) => {
  if (!tweets || tweets.length === 0) {
    return <p>No tweets available.</p>;
  }

  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetList;
