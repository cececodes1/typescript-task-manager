import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Task {
  id: string;
  title: string;
  description: string;
}

export const TaskDashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      // Simulated API call
      setTasks([
        { id: '1', title: 'Task 1', description: 'Description 1' },
        { id: '2', title: 'Task 2', description: 'Description 2' },
      ]);
    };

    fetchTasks();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Task Dashboard</h1>
      <Link to="/task/new" className="btn btn-primary mb-3">Create Task</Link>
      <div className="row">
        {tasks.map(task => (
          <div className="col-md-4" key={task.id}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">{task.description}</p>
                <Link to={`/task/${task.id}`} className="btn btn-secondary">View</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
