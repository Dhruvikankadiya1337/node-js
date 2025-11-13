// Create a server that returns JSON data when accessed from the browser.

const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (req,res)=>{
  res.send("server running successfully!");
})
app.get("/", (req, res) => {
  const data = {
    bookName: "Atomic Habits",
    author: "James Clear",
    price: 499,
    message: "JSON data sent successfully!"
  };

  res.json(data); 
});

app.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
