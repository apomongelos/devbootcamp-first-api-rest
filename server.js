require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes');

const port = process.env.PORT || 3000;
const mongoUri =
  `${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}` ||
  '<host>:<port>/<db-name>';

const server = express();

// Middleware para recibir cuerpos de solicitudes en formato JSON
server.use(express.json());

server.use('/api', apiRoutes);

// Configuracion de mongodb
mongoose
  .connect(`mongodb://${mongoUri}`, { useNewUrlParser: true })
  .then(() => {
    console.log('Conexion exitosa con MongoDB');
  })
  .catch((err) => {
    console.error('Hubo un error en la conexion a MongoDB', err);
  });

// Ejecucion del servidor
server.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});
