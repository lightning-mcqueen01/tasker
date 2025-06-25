const Task = require("../models/task");

const addTask = async (req, res) => {
  // console.log(req.body);
  const { name, listId } = req.body;

  const task = await Task.create({ name, listId });

  return res.status(200).json({ message: "Task successfully added", task });
};

const getTasks = async (req, res) => {
  try {
    const { listId } = req.params;
    // console.log(listId);
    const tasks = await Task.find({ listId });
    // console.log(tasks);

    return res.status(200).json(tasks);
  } catch (err) {
    // console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
};

const completeTask = async (req, res) => {
  // const { name, listId } = req.body;

  // console.log(name);
  console.log("sdgoidsnosdinsdoicmdsoimc");
  const { taskId } = req.params;
  console.log(taskId);
  // const tesker = await Task.deleteOne({ taskId });

  const deletedTask = await Task.findByIdAndDelete(taskId);

  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }

  // console.log(tesker);
  // const task = await Task.findByIdAndUpdate(
  //   taskId,
  //   { isComplete: true },
  //   { new: true }
  // );

  // task.deleteOne();
  res.status(200).json({ message: "tasks updated" });
};

module.exports = { addTask, getTasks, completeTask };
