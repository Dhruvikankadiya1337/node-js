const todosDiv = document.getElementById("todos");
const input = document.getElementById("todoInput");


function loadTodos() {
  fetch("http://localhost:4000")
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      todosDiv.innerHTML = "";

     
      data.map(function(item) {
        const div = document.createElement("div");
        div.className = "todo";

        div.innerHTML = `
          <span>${item.task}</span>
          <div>
            <button onclick="editTodo(${item.id}, '${item.task}')">Edit</button>
            <button onclick="deleteTodo(${item.id})">Delete</button>
          </div>
        `;

        todosDiv.appendChild(div);
      });
    })
    .catch(function(error) {
      console.log("Error loading todos:", error);
    });
}


function addTodo() {
  const text = input.value.trim();
  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  fetch("http://localhost:4000", {
    method: "POST",
  })
  .then(function() {
    input.value = "";
    loadTodos();
  })
  .catch(function(error) {
    console.log("Error adding todo:", error);
  });
}

function editTodo(id, oldTask) {
  const newTask = prompt("Edit task:", oldTask);
  if (newTask === null || newTask.trim() === "") return;

  fetch("http://localhost:4000",{
    method: "PUT",
  })
  .then(function() {
    loadTodos();
  })
  .catch(function(error) {
    console.log("Error editing todo:", error);
  });
}

function deleteTodo(id) {
  fetch("http://localhost:4000", {
    method: "DELETE"
  })
  .then(function() {
    loadTodos();
  })
  .catch(function(error) {
    console.log("Error deleting todo:", error);
  });
}

loadTodos();
