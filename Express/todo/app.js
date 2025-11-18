const express = require("express");
const app = express();

app.use(express.json());

app.use(express.static(__dirname));

let todos = [
  { id: 1, 
    text: "Learn Node.js",
},
  { id: 2,
     text: "Practice JavaScript",
  },
];
 
// GET
app.get("/todos",(req,res)=>{
    res.json(todos);
});
// POST
app.post("/todos", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text
  };
  res.json(newTodo);
});

// PUT
app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);      
  const newText = req.body.text;       
  todos = todos.map(todo => {
    if (todo.id === id) {
      return {
        id: todo.id,
        text: newText     
      };
    } else {
      return todo;      
    }
  });

  res.json({ message: "Todo updated successfully" });
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1); 
      break;
    }
  }

  res.json({ message: "Deleted" });
});



app.listen(4000, () =>
     console.log("Server running on http://localhost:4000"));


