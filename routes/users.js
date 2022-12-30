const express = require('express');
const userController = require('../controllers/user');
const { validateUser } = require('../middlewares/validate');

const usersRoutes = express.Router();

usersRoutes
  .get('/', userController.getAllUsers)
  .get('/:userId', userController.getUserByID)
  .post('/', validateUser, userController.createUser)
  .put('/:userId', userController.updateUserByID)
  .delete('/:userId', userController.deleteUserByID);

module.exports = usersRoutes;
