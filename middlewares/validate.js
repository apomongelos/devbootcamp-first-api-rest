function validateRol(req, res, next) {
  let { name, description } = req.body;
  if (!name || !description) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error:
          "Uno de los siguientes campos falta o esta vacio en el cuerpo de la solicitud: 'name', 'description'",
      },
    });
    return;
  }
  next();
}

function validateTask(req, res, next) {
  let { name, description } = req.body;
  if (!name || !description) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error:
          "Uno de los siguientes campos falta o esta vacio en el cuerpo de la solicitud: 'name', 'description'",
      },
    });
    return;
  }
  next();
}

function validateUser(req, res, next) {
  let { name, lastName, age, address } = req.body;
  if (!name || !lastName || !age || !address) {
    res.status(400).send({
      status: 'FAILED',
      data: {
        error:
          "Uno de los siguientes campos falta o esta vacio en el cuerpo de la solicitud: 'name', 'lastName', 'age', 'address'",
      },
    });
    return;
  }
  if (age < 0) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: 'Edad debe ser un numero positivo' },
    });
    return;
  }
  next();
}

module.exports = { validateRol, validateTask, validateUser };
