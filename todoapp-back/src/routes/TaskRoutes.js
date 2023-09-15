const express = require('express');
const router = express.Router();
const TaskController = require('../controller/TaskController');


router.get('/tasks', TaskController.getAllTasks);
router.get('/tasks/:task_id', TaskController.getTaskById);
router.get('/tasks/:user_id/:date', TaskController.getTaskByUId);
router.post('/tasks', TaskController.createTask);
router.put('/tasks/:task_id', TaskController.updateTask);
router.delete('/tasks/:task_id', TaskController.deleteTask);

module.exports = router;    