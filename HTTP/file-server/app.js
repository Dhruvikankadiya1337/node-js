const http = require("http");
const fs = require("fs");
const path = require("path");

function loadPage(res, pageName) {
  const fullPath = path.join(__dirname, "pages", pageName);

  fs.readFile((err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>Page Not Found</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
}

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    loadPage(res, "home.html");
  } 
  else if (req.url === "/about") {
    loadPage(res, "about.html");
  } 
  else if (req.url === "/contact") {
    loadPage(res, "contact.html");
  } 
  else {
    loadPage(res, "404.html");
  }
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
