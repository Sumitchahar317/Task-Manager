# MERN Stack Task Manager

A full-stack MERN (MongoDB, Express, React, Node.js) application built to track and manage daily tasks with a beautiful, responsive interface. Features robust task CRUD operations, real-time UI state sync, and page routing.

---

## 🚀 Live Deployment Links

*   **GitHub Repository:** [Sumitchahar317/Task-Manager](https://github.com/Sumitchahar317/Task-Manager)
*   **Backend Server (Render):** [https://task-manager-duct.onrender.com](https://task-manager-duct.onrender.com)
*   **Frontend Client (Vercel):** *[Insert your Vercel live URL here]*

---

## 📁 Project Structure

```text
Assignment8/
├── client/             # Frontend React app (Vite)
│   ├── src/
│   │   ├── assets/     # Components (Navbar, TaskDetail, NewtaskForm)
│   │   ├── pages/      # Views (Home, EditPage, EditForm)
│   │   └── App.jsx
│   └── package.json
└── server/             # Backend Express API
    ├── Controller/     # Request handlers
    ├── model/          # Mongoose database schemas
    ├── routes/         # Express API endpoints
    ├── server.js       # Express server configuration
    └── package.json
```

---

## ✨ Features

*   **Create Tasks:** Add a task with a title, description, and status (Completed/Pending).
*   **View Tasks:** Real-time display of all tasks with clean status badges.
*   **Edit Tasks:** Edit existing tasks through a dedicated edit view that pre-populates details and updates the database via `PATCH`.
*   **Delete Tasks:** Remove tasks with instant, dynamic state updates in the UI (no page refresh required).
*   **Environment De-coupling**: Configured to work in both local development and live production via environment variables.

---

## 🛠️ API Endpoints

The backend Express server exposes the following endpoints at `https://task-manager-duct.onrender.com/api/tasks`:

*   `GET /api/tasks` - Get all tasks.
*   `GET /api/tasks/:id` - Get a single task's details.
*   `POST /api/tasks` - Create a new task.
*   `PATCH /api/tasks/:id` - Update an existing task.
*   `DELETE /api/tasks/:id` - Delete a task.

---

## 💻 Local Setup & Installation

### 1. Backend Setup (`server`)
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside the `server/` directory and configure your port and MongoDB Atlas database connection string:
   ```env
   PORT=8000
   URL=mongodb+srv://<username>:<password>@cluster0.cbxha5l.mongodb.net/
   ```
4. Start the server:
   ```bash
   npm start
   ```
   *(The server will start at `http://localhost:8000`)*

### 2. Frontend Setup (`client`)
1. In a separate terminal, navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file inside the `client/` directory for local development:
   ```env
   VITE_API_URL=http://localhost:8000
   ```
4. Start the development environment:
   ```bash
   npm run dev
   ```
   *(Open `http://localhost:5173` or the port displayed in your terminal)*