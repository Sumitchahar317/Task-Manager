# MERN Stack Task and Workout Tracker

This is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to track daily tasks and workout routines. The project is split into two main modules: a Task Manager and a Workout Logger.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)

## Project Structure

The repository is organized into separate folders for the backend and frontend components. It appears there are two distinct frontends and likely two corresponding backends.

```
Assignment8/
├── backend-tasks/      # (Assumed) Backend for the Task Manager
│   ├── ...
│   └── package.json
├── backend-workouts/   # (Assumed) Backend for the Workout Logger
│   ├── ...
│   └── package.json
├── client/             # Frontend for the Task Manager
│   ├── src/
│   └── package.json
└── fronted/            # Frontend for the Workout Logger
    ├── src/
    └── package.json
```

## Features

*   **Task Manager**: Create, read, and update daily tasks.
*   **Workout Logger**: Log exercises with details like title, weight, and reps.
*   RESTful API for managing data.
*   Clean, component-based UI built with React.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   [Node.js](https://nodejs.org/en/) (v14 or later recommended)
*   [npm](https://www.npmjs.com/) (comes with Node.js)
*   [MongoDB](https://www.mongodb.com/try/download/community) (or a MongoDB Atlas account)

## Backend Setup

You need to run two separate backend servers for the tasks and workouts functionalities.

### 1. Task Manager Backend (Port 8000)

1.  **Navigate to the backend directory:**
    ```bash
    cd backend-tasks
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** in the `backend-tasks` root and add your MongoDB connection string and port:
    ```env
    PORT=8000
    MONGO_URI=your_mongodb_connection_string_for_tasks
    ```

4.  **Start the server:**
    ```bash
    npm start
    ```
    The server will be running at `http://localhost:8000`.

### 2. Workout Logger Backend (Port 8080)

Follow the same steps for the workout backend in its respective directory (`backend-workouts`).

1.  **Navigate, install dependencies, and create a `.env` file** with the following content:
    ```env
    PORT=8080
    MONGO_URI=your_mongodb_connection_string_for_workouts
    ```

2.  **Start the server:**
    ```bash
    npm start
    ```
    The server will be running at `http://localhost:8080`.

## Frontend Setup

You will also need to run the two React frontend applications separately.

### 1. Task Manager UI (`client`)

In a new terminal, navigate to the `client` directory, install dependencies, and start the development server.

```bash
cd client
npm install
npm start
```
The Task Manager UI will be available at `http://localhost:3000` (or the next available port).

### 2. Workout Logger UI (`fronted`)

In another terminal, navigate to the `fronted` directory.

```bash
cd fronted
npm install
npm start
```
The Workout Logger UI will be available at `http://localhost:3001` (or another port).

## API Endpoints

The application uses the following API endpoints:

### Tasks API

*   `GET /api/tasks/`: Fetches all tasks.
*   `POST /api/tasks/`: Creates a new task.

### Workouts API

*   `GET /api/workouts`: Fetches all workouts.
*   `POST /api/workouts`: Creates a new workout.
*   `DELETE /api/workouts/:id`: Deletes a specific workout.