const express = require("express");
const router  = express.Router();

const {
  getRoadmap,
  updateMilestone,
} = require("../controllers/roadmapController");

const { protect } = require("../middleware/authMiddleware");

router.get("/",           protect, getRoadmap);
router.put("/milestone",  protect, updateMilestone);

module.exports = router;