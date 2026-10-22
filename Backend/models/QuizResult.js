const mongoose = require("mongoose");

const QuizResultSchema = new mongoose.Schema(
  {
    // ── User Reference ───────────────────────────────────────
    user: {
      type:     mongoose.Schema.Types.ObjectId,
      ref:      "User",
      required: true,
    },

    // ── Quiz Answers ─────────────────────────────────────────
    // { "p1": "analytical", "p2": "builder", ... }
    answers: {
      type:     Map,
      of:       String,
      required: true,
    },

    // ── Career Scores ────────────────────────────────────────
    // { "Software Development": 7, "Data Science": 4, ... }
    scores: {
      type: Map,
      of:   Number,
    },

    // ── Top Career Matches ───────────────────────────────────
    topCareers: [
      {
        career:     { type: String },
        score:      { type: Number },
        percentage: { type: Number },
      },
    ],

    // ── Learning Style ───────────────────────────────────────
    learningStyle: {
      type: String,
      enum: ["visual", "reading", "kinesthetic", "auditory"],
      default: "visual",
    },

    // ── AI Generated Explanation ─────────────────────────────
    aiExplanation: {
      type:    String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("QuizResult", QuizResultSchema);