const todosDiv = document.getElementById("todos");
const input = document.getElementById("todoInput");

function loadTodos() {
  fetch("http://localhost:4000/todos")
    .then(res => res.json())
    .then(data => {
      todosDiv.innerHTML = "";

      data.map(item => {
        const div = document.createElement("div");
        div.className = "todo";

        div.innerHTML = `
          <span>${item.text}</span>
          <div>
            <button class="edit-btn" onclick="editTodo(${item.id}, '${item.text}')">Edit</button>
            <button class="delete-btn" onclick="deleteTodo(${item.id})">Delete</button>
          </div>
        `;

        todosDiv.appendChild(div);
      });
    });
}

function addTodo() {
  const text = input.value.trim();
  if (!text) return alert("Enter a task!");

  fetch("http://localhost:4000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  })
  .then(() => {
    input.value = "";
    loadTodos();
  });
}

function editTodo(id, oldText) {
  const updated = prompt("Edit task:", oldText);
  if (!updated) return;

  fetch(`http://localhost:4000/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: updated })
  })
  .then(() => loadTodos());
}

function deleteTodo(id) {
  fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE"
  })
  .then(() => loadTodos());
}

loadTodos();
