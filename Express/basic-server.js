//  Create a basic HTTP server that returns “Server is Running Successfully”.


const express = require("express");

const app= express();

app.get("/" ,(req,res) => {
    res.send("Server is Running Successfully");
});

app.listen(5000,()=>{
    console.log("server is running on http://localhost:5000");
});