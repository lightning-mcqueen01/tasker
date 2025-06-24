const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/tasker");
    console.log("DB connected");
  } catch (err) {
    console.log("db not connected ---------", err);
  }
};

module.exports = connectdb;
