const express = require('express');
const roleController = require('../controllers/role');
const { validateRol } = require('../middlewares/validate');

const rolesRoutes = express.Router();

rolesRoutes
  .get('/', roleController.getAllRoles)
  .get('/:roleId', roleController.getRoleByID)
  .post('/', validateRol, roleController.createRole)
  .put('/:roleId', roleController.updateRoleByID)
  .delete('/:roleId', roleController.deleteRoleByID);

module.exports = rolesRoutes;
