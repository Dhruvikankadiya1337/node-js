const http = require("http");

const server = http.createServer((req, res) => {
    const data = {
        name: "Dhruvi",
        subject: "Node.js",
        message: "JSON data returned successfully"
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
});

server.listen(5001, () => {
    console.log("JSON Server running at http://localhost:5001");
});
