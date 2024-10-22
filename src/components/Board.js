import React from 'react';
import Column from './Column';
import './Board.css';


const Board = () => {
  const data = {
    todo: [
      { title: 'Add Multi-Language Support', description: 'Enable multi-language support.', status: 'CAM-4', priority: 'High' },
      { title: 'Implement Email Notification System', description: 'Enable email notifications.', status: 'CAM-2', priority: 'Medium' },
      { title: 'Update User Profile Page UI', description: 'Enhance the user profile page.', status: 'CAM-1', priority: 'Low' }
    ],
    inProgress: [
      { title: 'Optimize Database Queries for Performance', description: 'Optimize DB queries.', status: 'CAM-3', priority: 'High' }
    ],
    done: [
      { title: 'Enhance Search Functionality', description: 'Improve search performance.', status: 'CAM-6', priority: 'Completed' },
      { title: 'Integrate Third-Party Payment Gateway', description: 'Add payment gateway.', status: 'CAM-7', priority: 'Completed' },
      { title: 'Conduct Security Vulnerability Assessment', description: 'Assess security vulnerabilities.', status: 'CAM-11', priority: 'Completed' },
      { title: 'Upgrade Server Infrastructure', description: 'Upgrade server infra.', status: 'CAM-10', priority: 'Completed' },
      { title: 'Implement Role-Based Access Control', description: 'Implement RBAC.', status: 'CAM-9', priority: 'Completed' }
    ]
  };

  return (
    <div className="board">
      <Column title="Todo" tasks={data.todo} />
      <Column title="In Progress" tasks={data.inProgress} />
      <Column title="Done" tasks={data.done} />
    </div>
  );
};

export default Board;
