const roleService = require('../services/role');

const getAllRoles = async (req, res) => {
  try {
    const roles = await roleService.getAllRoles();
    res.status(200).send({ status: 'OK', data: roles });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const getRoleByID = async (req, res) => {
  const {
    params: { roleId },
  } = req;

  if (!roleId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parametro ':roleId' no puede estar vacio" },
    });
    return;
  }

  try {
    const role = await roleService.getOneRole(roleId);
    if (!role) {
      res.status(404).send({
        status: 'FAILED',
        data: { error: `Rol con id ${roleId} no encontrado` },
      });
      return;
    }
    res.status(200).send({ status: 'OK', data: role });
  } catch (error) {
    res
      .status(error.status || 500)
      .send({ status: 'FAILED', data: { error: error.message || error } });
  }
};

const createRole = async (req, res) => {
  let { name, description } = req.body;

  const newRole = { name, description };

  try {
    const createdRole = await roleService.createNewRole(newRole);
    res.status(201).send({ status: 'OK', data: createdRole });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILDED', data: { error: error?.message || error } });
  }
};

const updateRoleByID = async (req, res) => {
  const {
    body,
    params: { roleId },
  } = req;

  if (!roleId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parametro ':roleId' no puede estar vacio" },
    });
  }

  try {
    const updatedRole = await roleService.updateOneRole(roleId, body);
    if (!updatedRole) {
      res.status(404).send({
        status: 'FAILED',
        data: { error: `Rol con id ${roleId} no encontrado` },
      });
      return;
    }
    res.status(200).send({ status: 'OK', data: updatedRole });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const deleteRoleByID = async (req, res) => {
  const {
    params: { roleId },
  } = req;

  if (!roleId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parametro ':roleId' no puede estar vacio" },
    });
  }

  try {
    await roleService.deleteOneRole(roleId);
    res.status(204).send({ status: 'OK' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllRoles,
  getRoleByID,
  createRole,
  updateRoleByID,
  deleteRoleByID,
};
