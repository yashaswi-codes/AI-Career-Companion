const express = require("express");
const router  = express.Router();

const {
  submitQuiz,
  getQuizResult,
  selectCareer,
} = require("../controllers/quizController");

const { protect } = require("../middleware/authMiddleware");

// Protected — login hona chahiye
router.post("/submit", protect, submitQuiz);
router.get("/result",  protect, getQuizResult);
router.post("/select-career", protect, selectCareer);

module.exports = router;