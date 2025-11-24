# 🐦 Mini Twitter – Tweet Posting App

📝 **Full-Stack Practical Assignment (React + Express + Middleware + Modules)**  

---

## 🚀 Project Overview

Build a **Mini Twitter Home Page** where users can:  

✔ Add a Tweet  
✔ Edit a Tweet  
✔ Delete a Tweet  
✔ List All Tweets  

The UI should look similar to **Twitter Home Timeline** (simple layout is enough).

---

## 🎯 Backend (Node + Express) Requirements

### 1️⃣ Modules to Use

- `express`  
- `fs` module (core)  
- `path` module (core)  
- User-defined module (e.g., `tweetService.js`)  

### 2️⃣ Routes Required (CRUD)

| Method | Endpoint           | Description                          |
|--------|------------------|--------------------------------------|
| GET    | `/api/tweets`     | Return all tweets (from `tweets.json`) |
| POST   | `/api/tweets`     | Add new tweet → save into `tweets.json` |
| PUT    | `/api/tweets/:id` | Update existing tweet (only `tweet` field editable) |
| DELETE | `/api/tweets/:id` | Delete tweet by ID                   |

**POST Required Fields:**  

| Field     | Type   | Required |
|-----------|--------|----------|
| username  | string | ✔        |
| tweet     | string | ✔        |
| createdAt | date   | auto-generated |

---

### 3️⃣ Middleware Requirements

**Application-level middleware:**  

- Logs each request: `METHOD + URL + Time`  
  Example:  

