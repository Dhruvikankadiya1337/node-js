const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  console.log("Request URL:", req.url);


  if (req.url === "/jsondata") {
    const data = {
      BookName: "Atomic Habits",
      price: 5.89,
      rating: "4.5 / 5",
      inStock: true,
    };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
    return;
  }

  let filepath;

  if (req.url === "/" || req.url === "/home") {
    filepath = path.join(__dirname, "home.html");
  } else if (req.url === "/about") {
    filepath = path.join(__dirname, "about.html");
  } else if (req.url === "/contact") {
    filepath = path.join(__dirname, "contact.html");
  } else {
    filepath = path.join(__dirname, "404.html");
  }


  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
