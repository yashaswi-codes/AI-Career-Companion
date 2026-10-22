import { useState } from "react";
import { Link } from "react-router-dom";

const BuddyCard = ({ career = "Software Development", progress = 65 }) => {
  const messages = [
    "Great progress this week! Keep pushing forward 💪",
    "You're doing amazing! Stay consistent and success will follow 🚀",
    "Every expert was once a beginner. Keep learning! 📚",
    "Small daily improvements lead to stunning results 🔥",
    "Believe in yourself! You are closer than you think 🎯",
  ];

  const [randomMessage] = useState(
  () => messages[Math.floor(Math.random() * messages.length)]
);

  return (
    <div className="bg-linear-to-br from-blue-600 to-purple-700 rounded-2xl p-6 relative overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-8 translate-x-8" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full translate-y-8 -translate-x-8" />

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">
            🤖
          </div>
          <div>
            <h3 className="font-bold text-white">AI Study Buddy</h3>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-200 text-xs">Online</span>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="bg-white/10 rounded-xl p-4 mb-4">
          <p className="text-blue-100 text-sm leading-relaxed">
            {randomMessage}
          </p>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-blue-200">Overall Progress</span>
            <span className="text-white font-bold">{progress}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Career */}
        <p className="text-blue-200 text-xs mb-4">
          Target: <span className="text-white font-semibold">{career}</span>
        </p>

        {/* CTA */}
        <Link
          to="/chatbot"
          className="w-full block text-center bg-white text-blue-600 hover:bg-blue-50 font-bold py-2.5 rounded-xl text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
        >
          Chat with AI Buddy
        </Link>

      </div>
    </div>
  );
};

export default BuddyCard;