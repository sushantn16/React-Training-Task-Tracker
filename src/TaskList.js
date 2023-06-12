import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Box, Typography, Card, CardActions, Chip } from '@mui/material';



const TaskList = ({ tasks, completeTask }) => {
    /**
     * Handle click event to mark task as completed
     * @param {object} task
     * @returns {undefined}
     */
    const handleTaskClick = (task) => {
        const index = tasks.findIndex((t) => t === task);
        completeTask(index);
    };

    // Sort completed tasks to the bottom
    const sortedTasks = [...tasks].sort((a, b) => {
        if (a.completed && !b.completed) {
            return 1;
        }
        if (!a.completed && b.completed) {
            return -1;
        }
        return 0;
    });

    // Filter completed tasks
    const completedTasks = sortedTasks.filter((task) => task.completed);

    return (
        <Box sx={{ mt: '20px', mb: '20px' }}>
            <Typography variant="h5" sx={{ mt: '20px' }}>
                Task List
            </Typography>

            {sortedTasks.map((task, index) => (
                !task.completed && (
                    <Card key={index} sx={{ mt: '10px', justifyContent: 'space-between', display: 'flex', p: '10px', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                fontSize: 20,
                                display: 'inline-block',
                                marginRight: '10px',
                                color: 'text.primary',
                            }}
                            gutterBottom
                        >
                            {task.name}
                        </Typography>
                        <CardActions sx={{ display: 'flex' }}>
                            <Chip
                                label="Mark as Complete"
                                onClick={() => handleTaskClick(task)}
                                onDelete={() => { }}
                                deleteIcon={<DoneIcon />}
                                color="primary"
                                variant="outlined"
                            />
                        </CardActions>
                    </Card>
                )
            ))}

            {/* Compeleted Tasks */}
            {completedTasks.length > 0 && (
                <Box sx={{ mt: '20px' }}>
                    <Typography variant="h6">Completed Tasks</Typography>
                    {completedTasks.map((task, index) => (
                        <Card key={index} sx={{ mt: '10px', justifyContent: 'space-between', display: 'flex', p: '10px', alignItems: 'center' }}>
                            <Typography
                                sx={{
                                    fontSize: 20,
                                    display: 'inline-block',
                                    marginRight: '10px',
                                    color: 'text.secondary',
                                }}
                                gutterBottom
                            >
                                {task.name}
                            </Typography>
                            <CardActions sx={{ display: 'flex' }}>
                                <Chip
                                    label="Completed"
                                    onClick={() => handleTaskClick(task)}
                                    onDelete={() => { }}
                                    deleteIcon={<DoneIcon />}
                                    color="primary"
                                />
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default TaskList;