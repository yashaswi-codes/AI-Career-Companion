
const asyncHandler = require("express-async-handler");
const { chatWithGemini } = require("../services/geminiService");
const QuizResult = require("../models/QuizResult");

const sendMessage = asyncHandler(async (req, res) => {
  const { message, history = [] } = req.body;

  if (typeof message !== "string" || !message.trim()) {
    res.status(400);
    throw new Error("Message is required");
  }

  if (!Array.isArray(history)) {
    res.status(400);
    throw new Error("Invalid conversation history");
  }

  const quizResult = await QuizResult.findOne({
    user: req.user._id,
  });

  const career =
    quizResult?.topCareers?.[0]?.career || "Career Exploration";

  const style = quizResult?.learningStyle || "visual";

  const context = `
Student's recommended career: ${career}
Learning style: ${style}

Act as a personalized AI career advisor.
Give relevant advice about skills, projects, roadmaps,
resumes, internships, interviews and placements.
  `;

  const response = await chatWithGemini(
    message.trim(),
    context,
    history
  );

  res.json({
    success: true,
    message: response,
    role: "assistant",
  });
});

module.exports = { sendMessage };
