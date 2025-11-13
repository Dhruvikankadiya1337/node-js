const express = require("express");
const path = require("path");
const app = express();

// Home page
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

// About page
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"));
});

// Contact page
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});


app.get("/jsondata", (req, res) => {
  const data = {
    BookName: "Atomic Habits",
    author: "James Clear",
    price: 499,
    rating: "4.5 / 5",
  };
  res.json(data);
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
