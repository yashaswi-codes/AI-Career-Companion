import { useAuth }            from "../context/AuthContext";
import { useQuiz }            from "../context/QuizContext";
import { CAREERS }            from "../data/careers";
import { getRoadmapByCareer } from "../data/roadmaps";
import { Link }               from "react-router-dom";

const DashboardPage = () => {
  const { user }       = useAuth();
  const { quizResult } = useQuiz();

  // ✅ User ne jo career select ki — uska data
  const myCareer    = user?.targetCareer || quizResult?.topCareers?.[0]?.career || "Software Developer";
  const careerData  = CAREERS[myCareer];
  const roadmapData = getRoadmapByCareer(myCareer);

  // ── Roadmap Progress Calculate Karo ───────────────────────
  const allMilestones   = roadmapData?.phases?.flatMap((p) => p.milestones) || [];
  const completedCount  = allMilestones.filter((m) => m.done).length;
  const totalCount      = allMilestones.length;
  const overallProgress = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // ── Current Active Phase ──────────────────────────────────
  const currentPhase = roadmapData?.phases?.find((p) => p.status === "in_progress")
                     || roadmapData?.phases?.[0];

  const userInitial = user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 animate-fadeIn">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
              Welcome back, {user?.name?.split(" ")[0] || "there"}! 👋
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Here's your career progress overview
            </p>
          </div>

          <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold shadow-md">
              {userInitial}
          </div>

          {/* Career Badge */}
          <div className="flex items-center gap-3 bg-white dark:bg-slate-800 rounded-2xl px-4 py-3 border border-slate-100 dark:border-slate-700">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
              {careerData?.emoji || "💼"}
            </div>
            <div>
              <p className="text-xs text-slate-400">Your Career Path</p>
              <p className="font-bold text-slate-800 dark:text-white text-sm">
                {myCareer}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { emoji: "🔥", label: "Day Streak",    value: user?.streak || 0,  color: "from-orange-500 to-red-500"    },
            { emoji: "✅", label: "Milestones Done",value: completedCount,     color: "from-green-500 to-emerald-500" },
            { emoji: "📚", label: "Total Milestones", value: totalCount,      color: "from-blue-500 to-cyan-500"     },
            { emoji: "⭐", label: "Progress",       value: `${overallProgress}%`, color: "from-purple-500 to-pink-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${stat.color} flex items-center justify-center text-lg mb-2`}>
                {stat.emoji}
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">

          {/* Career Progress */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-bold text-slate-900 dark:text-white">
                {myCareer} Roadmap Progress
              </h2>
              <Link to="/roadmap" className="text-sm text-blue-500 hover:text-blue-600 font-semibold">
                View Roadmap →
              </Link>
            </div>

            {roadmapData?.phases?.map((phase, index) => {
              const phaseTotal     = phase.milestones.length;
              const phaseCompleted = phase.milestones.filter((m) => m.done).length;
              const phasePercent   = phaseTotal > 0 ? Math.round((phaseCompleted / phaseTotal) * 100) : 0;

              return (
                <div key={index} className="mb-4 last:mb-0">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {phase.title}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                      {phasePercent}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-700 ${
                        phase.status === "completed" ? "bg-green-500" :
                        phase.status === "in_progress" ? "bg-blue-500" :
                        "bg-slate-300 dark:bg-slate-600"
                      }`}
                      style={{ width: `${phasePercent}%` }}
                    />
                  </div>
                </div>
              );
            })}

            {!roadmapData && (
              <p className="text-slate-400 text-sm text-center py-6">
                No roadmap found for this career yet.
              </p>
            )}
          </div>

          {/* Weekly Streak */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
            <h2 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              Weekly Streak <span>🔥</span>
            </h2>
            <div className="text-center mb-5">
              <div className="text-6xl font-black bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {user?.streak || 0}
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                day streak
              </p>
            </div>
            <div className="flex justify-between gap-1">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                <div key={day} className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-lg border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center text-xs">
                    -
                  </div>
                  <span className="text-[10px] text-slate-400">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 mb-6">
          <h2 className="font-bold text-slate-900 dark:text-white mb-4">
            Quick Access
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { to: "/roadmap",   emoji: "🗺️", label: "My Roadmap",  color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 border-blue-200"     },
              { to: "/resources", emoji: "📚", label: "Resources",   color: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 border-purple-200" },
              { to: "/planner",   emoji: "📅", label: "Planner",     color: "bg-green-50 dark:bg-green-900/20 text-green-600 border-green-200"   },
              { to: "/chatbot",   emoji: "🤖", label: "AI Chatbot",  color: "bg-red-50 dark:bg-red-900/20 text-red-600 border-red-200"           },
              { to: "/ai-tools",  emoji: "🛠️", label: "AI Tools",    color: "bg-pink-50 dark:bg-pink-900/20 text-pink-600 border-pink-200"       },
              { to: "/mentors",   emoji: "👥", label: "Mentors",     color: "bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 border-cyan-200"       },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border ${item.color} hover:shadow-md hover:-translate-y-1 transition-all duration-200`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-xs font-semibold text-center">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* YouTube Channels for this Career */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
            <h2 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span>▶️</span> YouTube Channels for {myCareer}
            </h2>
            {careerData?.youtube?.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {careerData.youtube.map((channel, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-xl text-sm font-medium"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-sm">No channels listed yet.</p>
            )}
          </div>

          {/* Mentors */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
            <h2 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span>⭐</span> Mentors to Follow
            </h2>
            {careerData?.mentors?.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {careerData.mentors.map((mentor, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 rounded-xl text-sm font-medium"
                  >
                    {mentor}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-sm">No mentors listed yet.</p>
            )}
          </div>

          {/* AI Tools */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
            <h2 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span>🛠️</span> Tools to Master
            </h2>
            {careerData?.tools?.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {careerData.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 rounded-xl text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-slate-400 text-sm">No tools listed yet.</p>
            )}
          </div>

          {/* Current Phase */}
          <div className="bg-linear-to-br from-blue-600 to-purple-700 rounded-2xl p-6 text-white">
            <h2 className="font-bold mb-2 flex items-center gap-2">
              <span>🎯</span> Currently Working On
            </h2>
            {currentPhase ? (
              <>
                <p className="text-blue-100 text-sm mb-3">
                  {currentPhase.phase} — {currentPhase.title}
                </p>
                <p className="text-2xl font-black mb-4">
                  {currentPhase.milestones.filter((m) => m.done).length} / {currentPhase.milestones.length} milestones
                </p>
                <Link
                  to="/roadmap"
                  className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold px-5 py-2.5 rounded-xl transition-all text-sm"
                >
                  Continue Roadmap →
                </Link>
              </>
            ) : (
              <p className="text-blue-100 text-sm">
                Start your roadmap to track progress!
              </p>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default DashboardPage;