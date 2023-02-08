const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const taskSchema = new Schema({
  name: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
