import { useState } from "react";
import { useAuth }  from "../context/AuthContext";
import { useQuiz }  from "../context/QuizContext";
import { CAREERS }  from "../data/careers";

const AIToolsPage = () => {
  const { user }       = useAuth();
  const { quizResult } = useQuiz();

  const myCareer   = user?.targetCareer || quizResult?.topCareers?.[0]?.career || "Software Developer";
  const careerData = CAREERS[myCareer];

  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Career ke tools + kuch general AI tools combine karo
  const careerTools = (careerData?.tools || []).map((tool) => ({
    name:        tool,
    description: `Essential tool for ${myCareer} — widely used in the industry`,
    emoji:       "🛠️",
    category:    "Career Specific",
  }));

  const generalAITools = [
    { name: "ChatGPT",      description: "AI assistant for brainstorming, writing, coding help", emoji: "💬", category: "AI Assistant" },
    { name: "Claude",       description: "AI assistant for deep reasoning, analysis, writing",    emoji: "🧠", category: "AI Assistant" },
    { name: "Notion AI",    description: "AI-powered notes, docs, and project management",        emoji: "📝", category: "Productivity" },
    { name: "Grammarly",    description: "AI writing assistant for grammar and clarity",          emoji: "✍️", category: "Productivity" },
    { name: "Canva AI",     description: "AI-powered design tool for graphics and presentations",  emoji: "🎨", category: "Design" },
    { name: "Otter.ai",     description: "AI meeting notes and transcription",                     emoji: "🎙️", category: "Productivity" },
  ];

  const allTools = [...careerTools, ...generalAITools];

  const filtered = allTools.filter((tool) =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            AI Tools & Software 🛠️
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Tools to master for{" "}
            <span className="text-blue-500 font-semibold">{myCareer}</span>
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
          />
        </div>

        {/* Career-Specific Tools */}
        {careerTools.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span>🎯</span> Tools for {myCareer}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {careerTools
                .filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((tool, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-2xl p-5 border-2 border-blue-200 dark:border-blue-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-2xl">
                        {tool.emoji}
                      </div>
                      <span className="text-xs font-bold px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 dark:text-white mb-1 text-lg">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* General AI Tools */}
        <div>
          <h2 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span>🤖</span> General AI Productivity Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {generalAITools
              .filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((tool, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-2xl">
                      {tool.emoji}
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white mb-1 text-lg">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
              No tools found
            </h3>
            <p className="text-slate-500">
              Try a different search term.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AIToolsPage;