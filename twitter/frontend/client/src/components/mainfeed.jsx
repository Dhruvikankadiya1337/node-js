
import React from 'react';
import CreateTweet from './createtweet';
import TweetList from './TweetList';

const MainFeed = () => {
  return (
    <main className="main">
      <CreateTweet />
      <TweetList />
    </main>
  );
}

export default MainFeed;