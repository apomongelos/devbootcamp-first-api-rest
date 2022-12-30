const roleModel = require('../schemas/role');

/**
 * Method to retrieve all Roles in the Collection "Roles" of DB
 * @returns All roles
 */
const getAllRoles = async () => {
  try {
    return await roleModel.find({}).select('_id name dscription');
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
    return await roleModel.findById(roleId).select('_id name description');
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
  const roleToInsert = new roleModel({
    name: newRole.name,
    description: newRole.description,
  });
  try {
    return await roleToInsert.save();
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
    return await roleModel.findByIdAndUpdate(roleId, changes, {
      new: true,
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
    await roleModel.findByIdAndDelete(roleId, {});
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
