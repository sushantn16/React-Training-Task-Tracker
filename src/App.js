import { Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  /**
   * To update the task to the state
   * @param {string} taskName - The name of the task to be added
   * @returns {undefined}
   */
  const addTask = (taskName) => {
    const newTask = { name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  /**
   * To mark the task as completed or not
   * @param {number} index - The index of the task to be completed
   * @returns {object} - The completed task
   */
  const completeTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  return (
    <Container sx={{ background: '#f2f6fc', minHeight: '100vh', mt: '0px' }}>
      <Typography variant="h3" sx={{ pt: '20px' }}>
        React Task Tracker
      </Typography>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} />
    </Container>
  );
};

export default App;
