const mongoose = require("mongoose");

const MilestoneSchema = new mongoose.Schema({
  title: {
    type:     String,
    required: true,
    trim:     true,
  },

  done: {
    type:    Boolean,
    default: false,
  },

  resources: {
    type:    [String],
    default: [],
  },

  completedAt: {
    type: Date,
  },
});

const PhaseSchema = new mongoose.Schema({
  phase: {
    type:     String,
    required: true,
  },

  title: {
    type:     String,
    required: true,
  },

  duration: {
    type:    String,
    default: "1 month",
  },

  status: {
    type:    String,
    enum:    ["locked", "in_progress", "completed"],
    default: "locked",
  },

  milestones: [MilestoneSchema],
});

const RoadmapSchema = new mongoose.Schema(
  {
    // ── User Reference ───────────────────────────────────────
    user: {
      type:     mongoose.Schema.Types.ObjectId,
      ref:      "User",
      required: true,
    },

    // ── Career ───────────────────────────────────────────────
    career: {
      type:     String,
      required: true,
    },

    // ── Total Duration ───────────────────────────────────────
    totalDuration: {
      type:    String,
      default: "12 months",
    },

    // ── Phases ───────────────────────────────────────────────
    phases: [PhaseSchema],

    // ── Overall Progress ─────────────────────────────────────
    overallProgress: {
      type:    Number,
      default: 0,
      min:     0,
      max:     100,
    },

    // ── AI Generated ─────────────────────────────────────────
    isAIGenerated: {
      type:    Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Roadmap", RoadmapSchema);