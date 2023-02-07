const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 200 },
  completed: { type: Boolean },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
