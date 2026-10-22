const express = require("express");
const router  = express.Router();

const {
  careerRecommendation,
  motivation,
  studyPlan,
} = require("../controllers/aiController");

const { protect } = require("../middleware/authMiddleware");

router.post("/career-recommendation", protect, careerRecommendation);
router.get ("/motivation",            protect, motivation);
router.post("/study-plan",            protect, studyPlan);

module.exports = router;