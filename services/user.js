const usersModel = require('../models/users');

/**
 * Method to retrieve all Users in the Collection "Users" of DB
 * @returns All users
 */
const getAllUsers = async () => {
  try {
    return await usersModel.findAll();
  } catch (error) {
    throw error;
  }
};

/**
 * Method to retrieve one User in the Collection "Users" of DB
 * @param { string } userID Id of user to retrieve
 * @returns One user
 */
const getOneUser = async (userID) => {
  try {
    return await usersModel.findByPk(userID);
  } catch (error) {
    throw error;
  }
};

/**
 * Method to create a new User in the Collection "Users" of DB
 * @param { User } newUser UserModel object with fields to create
 * @returns A created user
 */
const createNewUser = async (newUser) => {
  const userToInsert = {
    name: newUser.name,
    lastName: newUser.lastName,
    age: newUser.age,
    address: newUser.address,
  };
  try {
    return await usersModel.create(userToInsert);
  } catch (error) {
    throw error;
  }
};

/**
 * Method to update one User in the Collection "Users" of DB
 * @param { string } userId Id of user to update
 * @param { User } changes UserModel object with fields to change
 * @returns An updated user
 */
const updateOneUser = async (userId, changes) => {
  try {
    return await usersModel.update(changes, {
      where: { id: userId },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * Method to delete one User in the Collection "Users" of DB
 * @param { string } userId Id of user to delete
 */
const deleteOneUser = async (userId) => {
  try {
    await usersModel.destroy({ where: { id: userId } });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
