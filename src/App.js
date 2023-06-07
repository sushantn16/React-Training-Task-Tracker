import { Container } from '@mui/material';
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

    /**
    * To update the task to the state *
    * @param {string} taskName
    */

  const addTask = (taskName) => {
    const newTask = { name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

    /**
    * To mark the task as compeleted or not *
    * @param {number} index
    * @returns task
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
    <Container style={{ background: '#f2f6fc', minHeight:'100vh'}}>
      <h1>React Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} />
      </Container>
  );
};

export default App;
