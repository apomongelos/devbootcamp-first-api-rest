const taskModel = require('../schemas/task');

/**
 * Method to retrieve all Tasks in the Collection "Tasks" of DB
 * @returns All tasks
 */
const getAllTasks = async () => {
  try {
    return await taskModel.find({}).select('_id name description');
  } catch (error) {
    throw error;
  }
};

/**
 * Method to retrieve one Taks in the Collection "Tasks" of DB
 * @param { string } taskID Id of task to retrieve
 * @returns One task
 */
const getOneTask = async (taskID) => {
  try {
    return await taskModel.findById(taskID).select('_id name description');
  } catch (error) {
    throw error;
  }
};

/**
 * Method to create a new Task in the Collection "Tasks" of DB
 * @param { Task } newTask TaskModel object with fields to create
 * @returns A created task
 */
const createNewTask = async (newTask) => {
  const taskToInsert = new taskModel({
    name: newTask.name,
    description: newTask.description,
  });
  try {
    return await taskToInsert.save();
  } catch (error) {
    throw error;
  }
};

/**
 * Method to update one Task in the Collection "Tasks" of DB
 * @param { string } taskId Id of task to update
 * @param { Task } changes TaskModel object with fields to change
 * @returns An updated task
 */
const updateOneTask = async (taskId, changes) => {
  try {
    return await taskModel.findByIdAndUpdate(taskId, changes, {
      new: true,
    });
  } catch (error) {
    throw error;
  }
};

/**
 * Method to delete one Task in the Collection "Tasks" of DB
 * @param { string } taskId Id of task to delete
 */
const deleteOneTask = async (taskId) => {
  try {
    await taskModel.findByIdAndDelete(taskId, {});
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTasks,
  getOneTask,
  createNewTask,
  updateOneTask,
  deleteOneTask,
};
