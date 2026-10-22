const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type:     String,
    required: [true, "Task title is required"],
    trim:     true,
  },

  priority: {
    type:    String,
    enum:    ["high", "medium", "low"],
    default: "medium",
  },

  status: {
    type:    String,
    enum:    ["pending", "in_progress", "completed", "skipped"],
    default: "pending",
  },

  time: {
    type:    String,
    default: "TBD",
  },

  duration: {
    type:    String,
    default: "30 min",
  },

  date: {
    type:    Date,
    default: Date.now,
  },
});

const PlannerSchema = new mongoose.Schema(
  {
    // ── User Reference ───────────────────────────────────────
    user: {
      type:     mongoose.Schema.Types.ObjectId,
      ref:      "User",
      required: true,
    },

    // ── Daily Tasks ──────────────────────────────────────────
    tasks: [TaskSchema],

    // ── Weekly Goals ─────────────────────────────────────────
    weeklyGoals: [
      {
        title:    { type: String },
        deadline: { type: String },
        progress: { type: Number, default: 0 },
        emoji:    { type: String, default: "🎯" },
        color:    { type: String, default: "from-blue-500 to-purple-600" },
      },
    ],

    // ── Study Hours ──────────────────────────────────────────
    totalStudyHours: {
      type:    Number,
      default: 0,
    },

    // ── Week Start Date ──────────────────────────────────────
    weekStartDate: {
      type:    Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Planner", PlannerSchema);