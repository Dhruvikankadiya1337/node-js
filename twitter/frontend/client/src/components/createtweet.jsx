import React, { useState } from "react";

function CreateTweet({ fetchTweets }) {
  const [username, setUsername] = useState("");
  const [tweet, setTweet] = useState("");

  const handleSubmit = async () => {
    if (!tweet || tweet.length < 5) {
      alert("Tweet must be at least 5 characters long");
      return;
    }

    await fetch("/api/tweets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, tweet })
    });

    setUsername("");
    setTweet("");
    fetchTweets();
  };

  return (
    <div className="create-tweet">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <textarea
        placeholder="What's happening?"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
      />
      <button className="tweet-post-btn" onClick={handleSubmit}>Tweet</button>
    </div>
  );
}

export default CreateTweet;
