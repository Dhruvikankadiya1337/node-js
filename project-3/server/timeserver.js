const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const time = new Date().toString();

   
    fs.writeFile("time.txt", time, () => {
        res.end("Time file me save ho gaya ✅");
    });

});

server.listen(5001, () => {
    console.log("Time Server Running: http://localhost:5001");
});
