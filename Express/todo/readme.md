video : https://drive.google.com/file/d/1_OWjXxhqeorU1aiZIKUPEwKNeQqD1_s5/view?usp=sharing

# TODO App

A simple and clean TODO application built using **Node.js** and **Express.js**. This project helps you understand how backend routes, views, and basic data handling work together. It is perfect for beginners who want to learn Express.js with a small practical project.

---

## Overview

This TODO App allows users to:

* Create new TODO items
* View all existing TODOs on the homepage
* Delete specific TODO items

The project uses a lightweight structure with **Express.js**, **EJS templates**, and a **public folder** for styling. No database is used; data is stored temporarily during runtime.

---

## Features

* Clean UI using EJS
* Simple form submission for adding TODOs
* Easy route handling in Express
* Basic delete functionality
* Beginner-friendly code structure

---

## Folder Structure

```
/todo-app
│
├── app.js              
│
├── public              
│   └── index.ejs       

---




### 2. Start the Express server

```
node app.js

```

## Routes

### GET `/`

Loads the homepage and displays the list of TODO items.

### POST `/add`

Adds a new TODO item submitted through the form.

### GET `/delete/:id`

Deletes a specific TODO item using its ID.

---

## How It Works

* When the user opens the homepage, Express renders the `index.ejs` file.
* The TODO list is displayed using EJS loops.
* A form on the page allows adding new TODO items.
* Each TODO item includes a delete button that triggers a delete route.

This simple flow teaches how server-side rendering and routing work together in Express apps.

---



