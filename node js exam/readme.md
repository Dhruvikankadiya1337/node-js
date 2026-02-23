# 📝 MERN Stack Todo App with JWT Authentication 🚀

A full-stack **MERN Todo Application** with **JWT Authentication** where users can securely register, login, and manage their own todos.

---

## 🎯 Objective

Build a Todo app using the **MERN Stack** where:
- Users authenticate using **JWT**
- Each user manages **only their own todos**
- Todos can be **created, updated, deleted, completed, and filtered**

---

## ✨ Features

### 🔐 Authentication
- 🧑‍💻 User Registration
- 🔑 User Login with JWT
- 🔒 Password hashing using bcrypt
- 🛡️ Protected routes using JWT middleware

### ✅ Todo Management
- ➕ Create Todo
- 📄 View Todos (logged-in user only)
- ✏️ Update Todo
- 🗑️ Delete Todo
- ☑️ Mark Todo as Completed / Pending

### 🔍 Filtering
- 📋 All Todos
- ✅ Completed Todos
- ⏳ Pending Todos

### 🎁 Bonus Features
- 🔎 Search todo by title
- 🚪 Logout functionality
- 📊 Show total completed todos
- 🌱 Environment variables using dotenv
- ⏳ Loading & ❌ Error messages

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- ⚛️ React
- 🔗 Axios
- 🧭 React Router DOM

### 🌐 Backend
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB
- 📦 Mongoose
- 🔐 JSON Web Token (JWT)
- 🔑 bcrypt
- 🌱 dotenv

## 📁 Project Structure
```
backend/
├─ controller/
│ ├─ authController.js
│ └─ todoController.js
├─ middleware/
│ └─ authMiddleware.js
├─ models/
│ ├─ user.js
│ └─ todo.js
├─ routes/
│ ├─ authRoutes.js
│ └─ todoRoutes.js
├─ server.js
└─ .env

frontend/
├─ src/
│ ├─ pages/
│ │ ├─ Register.jsx
│ │ ├─ Login.jsx
│ │ └─ Dashboard.jsx
│ ├─ css/
│ │ ├─ register.css
│ │ └─ login.css
│ ├─ App.jsx
│ └─ main.jsx
└─ package.json
```
