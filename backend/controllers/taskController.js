const Task = require("../models/task");

const addTask = async (req, res) => {
  console.log(req.body);
  const { name } = req.body;

  const task = await Task.create({ name, list: req.listId });

  return res.status(200).json({ message: "list successfully added", task });
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ list: req.listId });

    return res.status(200).json(tasks);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = {addTask, getTasks};
