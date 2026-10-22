//npm init -y
//npm install express mongoose dotenv bcryptjs jsonwebtoken cors express-async-handler
//npm install @google/generative-ai axios
//npm install @google/generative-ai@latest
//npm install -D nodemon
//Updated package.json
const express  = require("express");
const dotenv   = require("dotenv");
const cors     = require("cors");
const connectDB = require("./config/db");

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ── Middleware ────────────────────────────────────────────
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS — Frontend ko allow karo
app.use(cors({
  origin:      process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
}));

// ── Routes ────────────────────────────────────────────────
app.use("/api/auth",     require("./routes/authRoutes"));
app.use("/api/quiz",     require("./routes/quizRoutes"));
app.use("/api/roadmap",  require("./routes/roadmapRoutes"));
app.use("/api/planner",  require("./routes/plannerRoutes"));
app.use("/api/chatbot",  require("./routes/chatbotRoutes"));
app.use("/api/ai",       require("./routes/aiRoutes"));

// ── Base Route ────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    message: "AI Career Companion API is running! 🚀",
    version: "1.0.0",
  });
});

// ── Error Middleware ──────────────────────────────────────
app.use(require("./middleware/errorMiddleware"));

// ── Start Server ──────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});