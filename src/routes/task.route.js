const express = require("express");
const TaskController = require("../controllers/task.controller");
const router = express.Router();

router.get("/", TaskController.findAll);
router.get("/:id", TaskController.findOne);
router.post("/create", TaskController.create);
router.put("/:id", TaskController.updated);
router.delete("/:id", TaskController.delete);

module.exports = router;
