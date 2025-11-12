const http = require("http");
const fs = require("fs");
const path = require("path");

function showPage(res, fileName) {
  const filePath = path.join(__dirname, "pages", fileName);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("<h1>404 - Page Not Found </h1>");
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}


const server = http.createServer((req, res) => {
  
  console.log("User visited:", req.url);

  if (req.url === "/" || req.url === "/home.html") {
    showPage(res, "home.html");
  } else if (req.url === "/about" || req.url === "/about.html") {
    showPage(res, "about.html");
  } else if (req.url === "/contact" || req.url === "/contact.html") {
    showPage(res, "contact.html");
  } else {
    showPage(res, "error.html");
  }
});

server.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
