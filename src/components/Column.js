import React from 'react';
import TaskCard from './TaskCard';
import './Column.css';

const Column = ({ title, tasks }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="task-list">
        {tasks.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
