// Create a server that writes the current date and time in a file every time a GET request is received.

const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  const dateTime = new Date().toString();

  fs.appendFile("dateTime.txt", dateTime + "\n", (err) => {
    if (err) {
      res.send("Error writing date and time");
    } else {
      res.send("Date and time written successfully!");
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
