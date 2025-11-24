import fs from "fs";
import path from "path";

const filePath = path.resolve("backend/data/tweet.json");

export const getTweets = () => {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

export const saveTweets = (tweets) => {
  fs.writeFileSync(filePath, JSON.stringify(tweets, null, 2));
};
