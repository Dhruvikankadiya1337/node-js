import React, { useState, useEffect } from "react";
import "./App.css";
import LeftSidebar from "./components/leftside";
import RightSidebar from "./components/rightside";
import CreateTweet from "./components/createtweet";
import TweetList from "./components/TweetList";

function App() {
  const [tweets, setTweets] = useState([]);

  // Fetch tweets from backend
  const fetchTweets = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tweets");
      const data = await res.json();
      setTweets(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="container">
      <LeftSidebar />

      <main className="main">
        <CreateTweet fetchTweets={fetchTweets} />
        <TweetList tweets={tweets} fetchTweets={fetchTweets} />
      </main>

      <RightSidebar />
    </div>
  );
}

export default App;
