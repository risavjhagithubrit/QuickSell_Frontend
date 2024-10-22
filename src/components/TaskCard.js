// import React from 'react';
// import './TaskCard.css';

// const TaskCard = ({ task }) => {
//   return (
//     <div className="task-card">
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       <div className="task-meta">
//         <span>{task.status}</span>
//         <span>{task.priority}</span>
//       </div>
//     </div>
//   );
// };

// export default TaskCard;
import React from 'react';

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <h3>{task.content}</h3>
    </div>
  );
};

export default TaskCard;
