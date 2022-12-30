const express = require('express');
const taskController = require('../controllers/task');
const { validateTask } = require('../middlewares/validate');

const tasksRoutes = express.Router();

tasksRoutes
  .get('/', taskController.getAllTasks)
  .get('/:taskId', taskController.getTaskByID)
  .post('/', validateTask, taskController.createTask)
  .put('/:taskId', taskController.updateTaskByID)
  .delete('/:taskId', taskController.deleteTaskByID);

module.exports = tasksRoutes;