const userModel = require('../schemas/user');

/**
 * Method to retrieve all Users in the Collection "Users" of DB
 * @returns All users
 */
const getAllUsers = async () => {
  try {
    return await userModel.find({}).select('_id name lastName age address');
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
    return await userModel
      .findById(userID)
      .select('_id name lastName age address');
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
  const userToInsert = new userModel({
    name: newUser.name,
    lastName: newUser.lastName,
    age: newUser.age,
    address: newUser.address,
  });
  try {
    return await userToInsert.save();
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
    return await userModel.findByIdAndUpdate(userId, changes, {
      new: true,
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
    await userModel.findByIdAndDelete(userId, {});
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
