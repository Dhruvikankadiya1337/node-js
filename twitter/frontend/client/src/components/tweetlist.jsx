import React from "react";
import Tweet from "./tweet";

function TweetList({ tweets, fetchTweets }) {
  return (
    <div className="tweet-list">
      {tweets.map((t) => (
        <Tweet key={t.id} tweet={t} fetchTweets={fetchTweets} />
      ))}
    </div>
  );
}

export default TweetList;
