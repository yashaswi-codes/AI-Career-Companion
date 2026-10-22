const jwt          = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User         = require("../models/User");

// ── Generate JWT Token ────────────────────────────────────
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "30d",
  });
};

// ── Register ──────────────────────────────────────────────
// POST /api/auth/register
const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  // User already exist karta hai?
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists with this email");
  }

  // User banao
  const user = await User.create({ name, email, password });

  if (user) {
    res.status(201).json({
      success: true,
      token:   generateToken(user._id),
      user: {
        _id:              user._id,
        name:             user.name,
        email:            user.email,
        hasCompletedQuiz: user.hasCompletedQuiz,
        targetCareer:     user.targetCareer,
        streak:           user.streak,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// ── Login ─────────────────────────────────────────────────
// POST /api/auth/login
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password");
  }

  // User dhundho — password bhi chahiye
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // Password check karo
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // Last login update karo
  user.lastLoginDate = new Date();
  user.loginDates.push(new Date());
  await user.save();

  res.json({
    success: true,
    token:   generateToken(user._id),
    user: {
      _id:              user._id,
      name:             user.name,
      email:            user.email,
      hasCompletedQuiz: user.hasCompletedQuiz,
      targetCareer:     user.targetCareer,
      streak:           user.streak,
    },
  });
});

// ── Logout ────────────────────────────────────────────────
// POST /api/auth/logout
const logout = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    message: "Logged out successfully",
  });
});

// ── Get Me ────────────────────────────────────────────────
// GET /api/auth/me
const getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  res.json({
    success: true,
    user: {
      _id:              user._id,
      name:             user.name,
      email:            user.email,
      bio:              user.bio,
      location:         user.location,
      github:           user.github,
      linkedin:         user.linkedin,
      hasCompletedQuiz: user.hasCompletedQuiz,
      targetCareer:     user.targetCareer,
      learningStyle:    user.learningStyle,
      streak:           user.streak,
    },
  });
});

// ── Update Profile ────────────────────────────────────────
// PUT /api/auth/profile
const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  // Update fields
  user.name     = req.body.name     || user.name;
  user.bio      = req.body.bio      || user.bio;
  user.location = req.body.location || user.location;
  user.github   = req.body.github   || user.github;
  user.linkedin = req.body.linkedin || user.linkedin;

  const updatedUser = await user.save();

  res.json({
    success: true,
    user: {
      _id:      updatedUser._id,
      name:     updatedUser.name,
      email:    updatedUser.email,
      bio:      updatedUser.bio,
      location: updatedUser.location,
      github:   updatedUser.github,
      linkedin: updatedUser.linkedin,
    },
  });
});

module.exports = { register, login, logout, getMe, updateProfile };