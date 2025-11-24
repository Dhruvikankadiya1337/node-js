# 🐦 Mini Twitter – Tweet Posting App

📝 **Full-Stack Assignment (React + Express + Middleware + Modules)**

---

## 🚀 Project Overview

Build a **Mini Twitter Home Page** where users can:  
✔ Add, Edit, Delete, List Tweets  

UI should resemble **Twitter Home Timeline** (simple layout is enough).

---

## 🎯 Requirements

- **Backend:** Node.js + Express + Modules (`fs`, `path`, user-defined)  
- **CRUD API Routes:**  
  - GET `/api/tweets` → list all tweets  
  - POST `/api/tweets` → add tweet  
  - PUT `/api/tweets/:id` → update tweet  
  - DELETE `/api/tweets/:id` → delete tweet  
- **Middleware:**  
  - App-level: log METHOD + URL + time  
  - Route-level: validate tweet (not empty, min 5 chars)  
- **Frontend:** React app  
  - Tweet input (username + content)  
  - Display tweets list with edit/delete buttons  
  - Fetch API for CRUD  

---

## 📁 File/Folder Structure

