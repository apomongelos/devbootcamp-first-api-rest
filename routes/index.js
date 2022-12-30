const express = require('express');
const rolesRoutes = require('./roles');
const tasksRoutes = require('./tasks');
const usersRoutes = require('./users');

const apiRoutes = express.Router();

apiRoutes.use('/roles', rolesRoutes);
apiRoutes.use('/tasks', tasksRoutes);
apiRoutes.use('/users', usersRoutes);

// Middleware para capturar todos los endpoint incorrectos
apiRoutes.all('*', (req, res) => {
  res.status(404).send({
    status: 'FAILED',
    data: { error: 'Endpoint incorrecto' },
  });
});

module.exports = apiRoutes;
