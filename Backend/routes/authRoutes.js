const express = require("express");
const router  = express.Router();

const {
  register,
  login,
  logout,
  getMe,
  updateProfile,
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

// Public Routes
router.post("/register", register);
router.post("/login",    login);
router.post("/logout",   logout);

// Protected Routes — login hona chahiye
router.get ("/me",      protect, getMe);
router.put ("/profile", protect, updateProfile);

module.exports = router;