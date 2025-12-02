import express from "express";
import { getTweets, saveTweets } from "../services/tweetservice.js";
import validateTweet from "../middleware/validatetweet.js";

const router = express.Router();

// GET all tweets
router.get("/", (req, res) => {
  const tweets = getTweets();
  res.json(tweets);
});

// POST tweet
router.post("/", validateTweet, (req, res) => {
  const tweets = getTweets();
  const { username, tweet } = req.body;

  const newTweet = {
    id: Date.now(),
    username,
    tweet,
    createdAt: new Date()
  };

  tweets.push(newTweet);
  saveTweets(tweets);

  res.json(newTweet);
});

// PUT update tweet
router.put("/:id", validateTweet, (req, res) => {
  const tweets = getTweets();
  const id = Number(req.params.id);
  const { tweet } = req.body;

  const index = tweets.findIndex(t => t.id === id);
  if (index === -1) return res.status(404).json({ error: "Tweet not found" });

  tweets[index].tweet = tweet;
  tweets[index].edited = true;

  saveTweets(tweets);

  res.json(tweets[index]);
});

// DELETE tweet
router.delete("/:id", (req, res) => {
  const tweets = getTweets();
  const id = Number(req.params.id);

  const newTweets = tweets.filter(t => t.id !== id);

  saveTweets(newTweets);

  res.json({ message: "Tweet deleted" });
});

export default router;