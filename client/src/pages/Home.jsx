import React, { useState, useEffect } from 'react';
import './Home.css';
import TaskDetail from '../assets/TaskDetail';
import { Link } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const Home = () => {
  const [tasks, setTasks] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${API_URL}/api/tasks/`);
        const json = await response.json();

        if (response.ok) setTasks(json);
        else setError(json.Error || "Failed to fetch tasks.");
      } catch {
        setError("Could not connect to the backend server.");
      }
    };
    fetchTasks();
  }, []);


  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4 text-center fw-bold text-dark">Daily Tasks</h2>

          {error && (
            <div className="alert alert-danger shadow-sm" role="alert">
              {error}
            </div>
          )}

          {tasks && tasks.length === 0 && (
            <div className="empty-state">
              <p>No tasks found. Add a task to get started! </p>
            </div>
          )}

          {tasks && tasks.map((task) => (
            <TaskDetail 
              key={task._id} 
              task={task} 
              onTaskDeleted={(deletedId) => {
                setTasks((prevTasks) => prevTasks.filter((t) => t._id !== deletedId));
              }}
            />
          ))}

          <Link to="/Addtask" className="btn btn-primary bAddtask">Add a new task</Link>

        </div>
      </div>
    </div>
  );
};

export default Home;
