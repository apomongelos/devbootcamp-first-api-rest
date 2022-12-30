const rolesModel = require('../models/roles');

/**
 * Method to retrieve all Roles in the Collection "Roles" of DB
 * @returns All roles
 */
const getAllRoles = async () => {
  try {
    return await rolesModel.findAll();
  } catch (error) {
    throw error;
  }
};

/**
 * Method to retrieve one Role in the Collection "Roles" of DB
 * @param { string } roleId Id of role to retrieve
 * @returns One role
 */
const getOneRole = async (roleId) => {
  try {
    return await rolesModel.findByPk(roleId);
  } catch (error) {
    throw error;
  }
};

/**
 * Method to create a new Role in the Collection "Roles" of DB
 * @param { Role } newRole RoleModel object with fields to create
 * @returns A created role
 */
const createNewRole = async (newRole) => {
  const roleToInsert = {
    name: newRole.name,
    description: newRole.description,
  };
  try {
    return await rolesModel.create(roleToInsert);
  } catch (error) {
    throw error;
  }
};

/**
 * Method to update one Role in the Collection "Roles" of DB
 * @param { string } roleId Id of role to update
 * @param { Role } changes RoleModel object with fields to change
 * @returns An updated role
 */
const updateOneRole = async (roleId, changes) => {
  try {
    return await rolesModel.update(changes, {
      where: { id: roleId },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * Method to delete one Role in the Collection "Roles" of DB
 * @param { string } roleId Id of role to delete
 */
const deleteOneRole = async (roleId) => {
  try {
    await rolesModel.destroy({ where: { id: roleId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllRoles,
  getOneRole,
  createNewRole,
  updateOneRole,
  deleteOneRole,
};
