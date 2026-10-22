const asyncHandler = require("express-async-handler");
const {
  getCareerRecommendation,
  getDailyMotivation,
  generateStudyPlan,
} = require("../services/geminiService");
const QuizResult = require("../models/QuizResult");

// ── Get Career Recommendation ─────────────────────────────
// POST /api/ai/career-recommendation
const careerRecommendation = asyncHandler(async (req, res) => {
  const quizResult = await QuizResult.findOne({ user: req.user._id });

  if (!quizResult) {
    res.status(404);
    throw new Error("Please complete the quiz first");
  }

  const explanation = await getCareerRecommendation(
    quizResult.topCareers,
    quizResult.learningStyle,
    quizResult.answers,
  );

  // Save in quiz result
  quizResult.aiExplanation = explanation;
  await quizResult.save();

  res.json({
    success: true,
    data:    explanation,
  });
});

// ── Get Daily Motivation ──────────────────────────────────
// GET /api/ai/motivation
const motivation = asyncHandler(async (req, res) => {
  const quizResult = await QuizResult.findOne({ user: req.user._id });
  const career     = quizResult?.topCareers?.[0]?.career || "Software Development";

  const message = await getDailyMotivation(career, 7, 65);

  res.json({
    success: true,
    data:    message,
  });
});

// ── Generate Study Plan ───────────────────────────────────
// POST /api/ai/study-plan
const studyPlan = asyncHandler(async (req, res) => {
  const { hoursPerDay = 2 } = req.body;

  const quizResult    = await QuizResult.findOne({ user: req.user._id });
  const career        = quizResult?.topCareers?.[0]?.career || "Software Development";
  const learningStyle = quizResult?.learningStyle            || "visual";

  const plan = await generateStudyPlan(career, learningStyle, hoursPerDay);

  res.json({
    success: true,
    data:    plan,
  });
});

module.exports = {
  careerRecommendation,
  motivation,
  studyPlan,
};