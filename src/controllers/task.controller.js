const Task = require("../schemas/task.schema");
const validationTasks = require("../validation/task.validation");

class TaskController {
  static create = async (req, res) => {
    const task = new Task({
      name: req.body.name,
      completed: req.body.completed,
    });
    try {
      const { error } = validationTasks(req.body);
      if (error) res.status(400).json({ message: error.details[0].message });

      const newTask = await Task.create(task);
      return res.status(201).json({ newTask });
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };
  static findAll = async (req, res) => {
    try {
      const tasks = await Task.find();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };

  static findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findOne({ where: { id: id } });
      if (!task) return res.status(404).json("Task not found");
      return res.status(200).json(task);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };

  static updated = async (req, res) => {
    try {
      const { id } = req.params;
      const task = await Task.findById({ id: id });
      if (!task) return res.status(404).json("Task not found");
      await Task.findByIdAndUpdate(id, task);
      return res.status(200).json("Task updated successfully.");
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };

  static delete = async (req, res) => {
    try {
      const { id } = req.params.id;
      const task = await Task.findById({ id: id });
      if (!task) return res.status(404).json("Task not found");
      await Task.findByIdAndDelete(id);
      return res.status(200).json("Task deleted successfully.");
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  };
}

module.exports = TaskController;
