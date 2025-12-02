import React, { useState } from "react";

const CreateTweet = ({ fetchTweets }) => {
  const [username, setUsername] = useState("");
  const [tweet, setTweet] = useState("");

  const handleSubmit = async () => {
    // Validation
    if (!username.trim()) {
      alert("Username cannot be empty");
      return;
    }

    if (!tweet.trim() || tweet.trim().length < 5) {
      alert("Tweet must be at least 5 characters long");
      return;
    }

    try {
      // Send POST request to backend
      const response = await fetch("http://localhost:5000/api/tweets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, tweet })
      });

      if (!response.ok) {
        throw new Error("Failed to post tweet");
      }

      // Reset input fields
      setUsername("");
      setTweet("");

      // Refresh tweets in parent component
      fetchTweets();
    } catch (error) {
      console.error("Error posting tweet:", error);
      alert("Error posting tweet. Make sure the backend is running.");
    }
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
      <button onClick={handleSubmit}>Tweet</button>
    </div>
  );
};

export default CreateTweet;
