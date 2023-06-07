import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');

    // To handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        //check if textfield is empty
        if (task.trim() === '') {
            return;
        }

        addTask(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="task-input"
                label="Add your task"
                size="small"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                sx={{ mr: '10px' }}
                style={{ width: 500 }}
                />
            <Button 
                variant="contained" 
                type="submit" 
                style={{height:40}}
            >
                Add Task
            </Button>
        </form>
    );
};

export default TaskForm;
