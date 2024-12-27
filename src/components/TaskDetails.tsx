
import React from 'react';
import { useParams } from 'react-router-dom';

export const TaskDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="container mt-4">
      <h1>Task Details</h1>
      <p>Task ID: {id}</p>
      <button className="btn btn-primary">Edit Task</button>
      <button className="btn btn-danger ms-2">Delete Task</button>
    </div>
  );
};
