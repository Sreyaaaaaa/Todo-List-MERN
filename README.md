✅ MERN Stack Task Tracker
Welcome to this straightforward and fully functional Task Manager App, crafted using the MERN stack — that stands for MongoDB, Express, React, and Node.js.

This application allows you to manage your daily tasks — from adding to completing or removing them — while showcasing a clean integration of front-end and back-end development using modern technologies.

✨ Features
📝 Add new tasks

✔️ Toggle tasks as complete or incomplete

❌ Delete tasks

💾 Data is persisted using MongoDB

📱 Responsive and user-friendly React interface

⚙️ Technologies Used
This project is built with:

MongoDB – for data storage

Express.js – to build RESTful APIs

React.js – for the interactive frontend

Node.js – server-side JavaScript runtime

Mongoose – for MongoDB schema and queries

Axios – to handle HTTP requests between client and server

Folder Layout

Mern-todo/
├── backend/        # Node + Express + MongoDB logic
│   ├── models/     # Mongoose data schemas
│   ├── routes/     # API route handlers
│   └── server.js   # Main server file
├── frontend/       # React frontend
│   ├── src/        # React components and views
│   └── package.json  # React dependencies and scripts

Clone this repository
git clone https:https://github.com/Sreyaaaaaa/Todo-List-MERN-web-dev.git

cd mern-todo

Set up the backend
cd backend
npm install

create a .env file inside the backend folder with the following content:

PORT=5000
MONGO_URI=mongodb://localhost:27017/todolist

Start the backend server
npm start



