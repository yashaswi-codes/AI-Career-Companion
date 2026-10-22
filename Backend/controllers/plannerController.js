const asyncHandler = require("express-async-handler");
const Planner      = require("../models/Planner");

// ── Get Planner ───────────────────────────────────────────
// GET /api/planner
const getPlanner = asyncHandler(async (req, res) => {
  let planner = await Planner.findOne({ user: req.user._id });

  // Pehli baar — empty planner banao
  if (!planner) {
    planner = await Planner.create({
      user:  req.user._id,
      tasks: [],
    });
  }

  res.json({
    success: true,
    data:    planner,
  });
});

// ── Add Task ──────────────────────────────────────────────
// POST /api/planner/task
const addTask = asyncHandler(async (req, res) => {
  const { title, priority, time, duration } = req.body;

  if (!title) {
    res.status(400);
    throw new Error("Task title is required");
  }

  let planner = await Planner.findOne({ user: req.user._id });

  if (!planner) {
    planner = await Planner.create({ user: req.user._id, tasks: [] });
  }

  const newTask = {
    title,
    priority: priority || "medium",
    time:     time     || "TBD",
    duration: duration || "30 min",
    status:   "pending",
    date:     new Date(),
  };

  planner.tasks.push(newTask);
  await planner.save();

  res.status(201).json({
    success: true,
    data:    planner.tasks[planner.tasks.length - 1],
  });
});

// ── Update Task ───────────────────────────────────────────
// PUT /api/planner/task/:taskId
const updateTask = asyncHandler(async (req, res) => {
  const { taskId }                    = req.params;
  const { title, priority, status, time, duration } = req.body;

  const planner = await Planner.findOne({ user: req.user._id });

  if (!planner) {
    res.status(404);
    throw new Error("Planner not found");
  }

  // Task dhundho
  const task = planner.tasks.id(taskId);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  // Update karo
  task.title    = title    || task.title;
  task.priority = priority || task.priority;
  task.status   = status   || task.status;
  task.time     = time     || task.time;
  task.duration = duration || task.duration;

  await planner.save();

  res.json({
    success: true,
    data:    task,
  });
});

// ── Delete Task ───────────────────────────────────────────
// DELETE /api/planner/task/:taskId
const deleteTask = asyncHandler(async (req, res) => {
  const { taskId } = req.params;

  const planner = await Planner.findOne({ user: req.user._id });

  if (!planner) {
    res.status(404);
    throw new Error("Planner not found");
  }

  // Task remove karo
  planner.tasks.pull({ _id: taskId });
  await planner.save();

  res.json({
    success: true,
    message: "Task deleted successfully",
  });
});

// ── Toggle Task Status ────────────────────────────────────
// PUT /api/planner/task/:taskId/toggle
const toggleTask = asyncHandler(async (req, res) => {
  const { taskId } = req.params;

  const planner = await Planner.findOne({ user: req.user._id });

  if (!planner) {
    res.status(404);
    throw new Error("Planner not found");
  }

  const task = planner.tasks.id(taskId);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  // Toggle status
  task.status = task.status === "completed" ? "pending" : "completed";
  await planner.save();

  res.json({
    success: true,
    data:    task,
  });
});

module.exports = {
  getPlanner,
  addTask,
  updateTask,
  deleteTask,
  toggleTask,
};