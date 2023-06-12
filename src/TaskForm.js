import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState('');

    /**
     * To handle form submission
     * @param {event} e - The form submission event
     * @returns {undefined}
     */
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if textfield is empty
        if (task.trim() === '') {
            return;
        }

        // Add task to the list
        addTask(task);
        setTask('');
    };
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: '20px' }}>
            <TextField
                id="task-input"
                label="Add your task"
                size="small"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                sx={{ mr: '10px', width: 500, backgroundColor: '#fff' }}
            />
            <Button
                variant="contained"
                type="submit"
                sx={{ height: 40 }}
            >
                Add Task
            </Button>
        </Box>
    );
};

export default TaskForm;
