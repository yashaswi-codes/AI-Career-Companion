const asyncHandler  = require("express-async-handler");
const QuizResult    = require("../models/QuizResult");
const User          = require("../models/User");
const {
  calculateCategoryScores,
  getTopCategories,
} = require("../utils/categoryQuiz");
const {
  calculateCareerScores,
  getTop5Careers,
} = require("../utils/careerQuiz");

// ── Submit Quiz (Both Stages) ─────────────────────────────
// POST /api/quiz/submit
const submitQuiz = asyncHandler(async (req, res) => {
  const { categoryAnswers, careerAnswers, selectedCategory } = req.body;

  if (!categoryAnswers || !careerAnswers || !selectedCategory) {
    res.status(400);
    throw new Error("Category answers, career answers and selected category are required");
  }

  // ── Stage 1 — Category Scores ──────────────────────────
  const categoryScores = calculateCategoryScores(categoryAnswers);
  const topCategories  = getTopCategories(categoryScores, 3);

  // ── Stage 2 — Career Scores ────────────────────────────
  const careerScores = calculateCareerScores(careerAnswers, selectedCategory);
  const topCareers    = getTop5Careers(careerScores);

  // ── Save / Update Quiz Result ──────────────────────────
  let quizResult = await QuizResult.findOne({ user: req.user._id });

  const resultData = {
    answers: { ...categoryAnswers, ...careerAnswers },
    scores:  careerScores,
    topCareers: topCareers.map((c) => ({
      career:     c.career,
      score:      c.score,
      percentage: c.percentage,
    })),
    learningStyle: "visual", // default — agar learning style quiz alag se chahiye toh yahan add karo
  };

  if (quizResult) {
    Object.assign(quizResult, resultData);
    await quizResult.save();
  } else {
    quizResult = await QuizResult.create({
      user: req.user._id,
      ...resultData,
    });
  }

  // ── User Update Karo ────────────────────────────────────
  await User.findByIdAndUpdate(req.user._id, {
    hasCompletedQuiz: true,
    targetCareer:     topCareers[0]?.career || "",
  });

  res.status(201).json({
    success: true,
    data: {
      topCareers,
      selectedCategory,
      topCategories,
      scores: careerScores,
    },
  });
});

// ── Get Quiz Result ───────────────────────────────────────
// GET /api/quiz/result
const getQuizResult = asyncHandler(async (req, res) => {
  const quizResult = await QuizResult.findOne({ user: req.user._id });

  if (!quizResult) {
    res.status(404);
    throw new Error("Quiz result not found — please take the quiz first");
  }

  res.json({
    success: true,
    data: {
      topCareers: quizResult.topCareers,
      scores:     quizResult.scores,
      createdAt:  quizResult.createdAt,
    },
  });
});

// ── Select Career ──────────────────────────────────────────
// POST /api/quiz/select-career
const selectCareer = asyncHandler(async (req, res) => {
  const { career } = req.body;

  if (!career) {
    res.status(400);
    throw new Error("Career is required");
  }

  await User.findByIdAndUpdate(req.user._id, {
    targetCareer: career,
  });

  res.json({
    success: true,
    data: { targetCareer: career },
  });
});

module.exports = { submitQuiz, getQuizResult, selectCareer };