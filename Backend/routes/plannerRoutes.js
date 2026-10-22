const express = require("express");
const router  = express.Router();

const {
  getPlanner,
  addTask,
  updateTask,
  deleteTask,
  toggleTask,
} = require("../controllers/plannerController");

const { protect } = require("../middleware/authMiddleware");

router.get  ("/",                   protect, getPlanner);
router.post ("/task",               protect, addTask);
router.put  ("/task/:taskId",       protect, updateTask);
router.delete("/task/:taskId",      protect, deleteTask);
router.put  ("/task/:taskId/toggle",protect, toggleTask);

module.exports = router;