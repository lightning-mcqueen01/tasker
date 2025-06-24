const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  listId: { type: mongoose.Schema.Types.ObjectId, ref: "list", require: true },

  name: { type: String, require: true, unique: true },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
