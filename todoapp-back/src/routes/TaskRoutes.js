const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');


router.get('/tasks', TaskController.getAllTasks);
router.get('/tasks/:date', TaskController.getTaskByDate);
router.post('/tasks', TaskController.createTask);
router.put('/tasks/:task_id', TaskController.updateTask);
router.delete('/tasks/:task_id', TaskController.deleteTask);

module.exports = router;    