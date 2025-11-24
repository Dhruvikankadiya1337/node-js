import React, { useState } from "react";

function Tweet({ tweet, fetchTweets }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(tweet.tweet);

  const handleDelete = async () => {
    await fetch(`/api/tweets/${tweet.id}`, { method: "DELETE" });
    fetchTweets();
  };

  const handleUpdate = async () => {
    if (newText.length < 5) {
      alert("Tweet must be at least 5 characters long");
      return;
    }
    await fetch(`/api/tweets/${tweet.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tweet: newText })
    });
    setIsEditing(false);
    fetchTweets();
  };

  return (
    <div className="tweet">
      <div className="tweet-content">
        <h4>@{tweet.username}</h4>
        {isEditing ? (
          <>
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <button onClick={handleUpdate}>Save</button>
          </>
        ) : (
          <p>{tweet.tweet} {tweet.edited && <span>(Edited)</span>}</p>
        )}
        <small>{new Date(tweet.createdAt).toLocaleString()}</small>
        {!isEditing && (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Tweet;
