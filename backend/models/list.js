const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },

  name: { type: String, require: true, unique: true },
});

const List = mongoose.model("List", listSchema);

module.exports = List;
