const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  listId: { type: mongoose.Schema.Types.ObjectId, ref: "List", required: true },

  name: { type: String, require: true, unique: true },
  isComplete: { type: Boolean, default: false, require: true },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
