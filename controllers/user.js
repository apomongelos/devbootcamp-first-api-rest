const userService = require('../services/user');

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).send({ status: 'OK', data: users });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const getUserByID = async (req, res) => {
  const {
    params: { userId },
  } = req;

  if (!userId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parametro ':userId' no puede estar vacio" },
    });
    return;
  }

  try {
    const user = await userService.getOneUser(userId);
    if (!user) {
      res.status(404).send({
        status: 'FAILED',
        data: { error: `Usuario con id ${userId} no encontrado` },
      });
      return;
    }
    res.status(200).send({ status: 'OK', data: user });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const createUser = async (req, res) => {
  let { name, lastName, age, address } = req.body;

  const newUser = { name, lastName, age, address };

  try {
    const createdUser = await userService.createNewUser(newUser);
    res.status(201).send({ status: 'OK', data: createdUser });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const updateUserByID = async (req, res) => {
  const {
    body,
    params: { userId },
  } = req;

  if (!userId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parametro ':userId' no puede estar vacio" },
    });
  }

  try {
    const updatedUser = await userService.updateOneUser(userId, body);
    if (!updatedUser) {
      res.status(404).send({
        status: 'FAILED',
        data: {
          error: `Usuario con id ${userId} no encontrado, no se pudo actualizar`,
        },
      });
      return;
    }
    res.status(200).send({ status: 'OK', data: updatedUser });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const deleteUserByID = async (req, res) => {
  const {
    params: { userId },
  } = req;

  if (!userId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parametro ':userId' no puede estar vacio" },
    });
  }

  try {
    await userService.deleteOneUser(userId);
    res.status(204).send({ status: 'OK' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllUsers,
  getUserByID,
  createUser,
  updateUserByID,
  deleteUserByID,
};
