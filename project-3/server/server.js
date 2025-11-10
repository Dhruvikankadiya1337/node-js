const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Server is Running Successfully ✅");
});

server.listen(5000, () => {
    console.log("Server Running: http://localhost:5000");
});
