require('dotenv').config();
const express = require('express');
const apiRoutes = require('./routes');
const db = require('./models');

const port = process.env.PORT || 3000;

const server = express();

// Middleware para recibir cuerpos de solicitudes en formato JSON
server.use(express.json());

server.use('/api', apiRoutes);

db.sync()
  .then(() => {
    console.log('Conectado a SQLite');
  })
  .catch(() => {
    console.log('Hubo un error al conectarse a SQLite');
  });
// Ejecucion del servidor
server.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
