const taskService = require('../services/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).send({ status: 'OK', data: tasks });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const getTaskByID = async (req, res) => {
  const {
    params: { taskId },
  } = req;

  if (!taskId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parametro ':taskId' no puede estar vacio" },
    });
    return;
  }

  try {
    const task = await taskService.getOneTask(taskId);
    if (!task) {
      res.status(404).send({
        status: 'FAILED',
        data: { error: `Tarea con id ${taskId} no encontrado` },
      });
      return;
    }
    res.status(200).send({ status: 'OK', data: task });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const createTask = async (req, res) => {
  let { name, description } = req.body;

  const newTask = { name, description };

  try {
    const createdTask = await taskService.createNewTask(newTask);
    res.status(201).send({ status: 'OK', data: createdTask });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const updateTaskByID = async (req, res) => {
  const {
    body,
    params: { taskId },
  } = req;

  if (!taskId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parametro ':taskId' no puede estar vacio" },
    });
  }

  try {
    const updatedTask = await taskService.updateOneTask(taskId, body);
    if (!updatedTask) {
      res.status(404).send({
        status: 'FAILED',
        data: {
          error: `Tarea con id ${taskId} no encontrado, no se pudo actualizar`,
        },
      });
      return;
    }
    res.status(200).send({ status: 'OK', data: updatedTask });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const deleteTaskByID = async (req, res) => {
  const {
    params: { taskId },
  } = req;

  if (!taskId) {
    res.status(400).send({
      status: 'FAILED',
      data: { error: "Parametro ':taskId' no puede estar vacio" },
    });
  }

  try {
    await taskService.deleteOneTask(taskId);
    res.status(204).send({ status: 'OK' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllTasks,
  getTaskByID,
  createTask,
  updateTaskByID,
  deleteTaskByID,
};
