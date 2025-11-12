const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;

function servePage(res, pageName) {
  const filePath = path.join(__dirname, "pages", pageName);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      return res.end("Server Error");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {

  const logMessage = req.url + " visited\n";
  fs.appendFile(path.join(__dirname, "logs", "server.log"), logMessage, () => {});

  if (req.url === "/") {
    servePage(res, "index.html");
  } else if (req.url === "/about") {
    servePage(res, "about.html");
  } else if (req.url === "/contact") {
    servePage(res, "contact.html");
  } else {
    servePage(res, "error.html");
  }
});

server.listen("5000", () => {
  console.log("✅ Server running at http://localhost:5000");
});
