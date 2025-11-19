const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../frontend")));

let todos = [
  { id: 1, text: "Learn Node.js" },
  { id: 2, text: "Practice JavaScript" }
];


app.get("/todos", (req, res) => res.json(todos));

app.post("/todos", (req, res) => {
  const newTodo = { id: Date.now(), text: req.body.text };
  todos.push(newTodo);
  res.json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.map(t => (t.id === id ? { id, text: req.body.text } : t));
  res.json({ message: "updated" });
});

app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.json({ message: "deleted" });
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
