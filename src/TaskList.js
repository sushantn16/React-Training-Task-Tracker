import React from 'react';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';

const TaskList = ({ tasks, completeTask }) => {

    // Handle click event to mark task as compeleted
  const handleTaskClick = (task) => {
    const index = tasks.findIndex((t) => t === task);
    completeTask(index);
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    // Sort completed tasks to the bottom
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    return 0;
  });

  return (
    <div>
      <h2>Task List</h2>
      <ul className="task-list">
        {sortedTasks.map((task, index) => (
          <li
            className={'task-list-item' + (task.completed ? ' task-completed' : '')}
            key={index}
          >
            <span>{task.name}</span>
            {task.completed ? (
              <Chip
                label="Completed"
                onClick={() => handleTaskClick(task)}
                deleteIcon={<DoneIcon />}
                color="primary"
              />
            ) : (
              <Chip
                label="Mark as Complete"
                onClick={() => handleTaskClick(task)}
                deleteIcon={<DoneIcon />}
                color="primary"
                variant="outlined"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
