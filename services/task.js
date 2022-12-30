const tasksModel = require('../models/tasks');

/**
 * Method to retrieve all Tasks in the Collection "Tasks" of DB
 * @returns All tasks
 */
const getAllTasks = async () => {
  try {
    return await tasksModel.findAll();
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
    return await tasksModel.findByPk(taskID);
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
  const taskToInsert = {
    name: newTask.name,
    description: newTask.description,
  };
  try {
    return await tasksModel.create(taskToInsert);
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
    return await tasksModel.update(changes, {
      where: { id: taskId },
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
    await tasksModel.destroy({ where: { id: taskId } });
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
