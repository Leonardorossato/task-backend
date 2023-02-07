const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: false},
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
