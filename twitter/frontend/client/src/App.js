import React from "react";
import LeftSidebar from "./components/leftside";
import RightSidebar from "./components/rightside";
import CreateTweet from "./components/createtweet";
import TweetList from "./components/tweetlist";

function App() {
  const [tweets, setTweets] = useState([
    { id: 1, username: "@username", tweet: "This is a sample tweet! 🔥" },
    { id: 2, username: "@harold", tweet: "Another cool post with image!" },
  ]);

  return (
    <div className="container">
      <LeftSidebar />
      
      <main className="main">
        <CreateTweet />
        <TweetList tweets={tweets} />
      </main>

      <RightSidebar />
    </div>
  );
}

export default App;
