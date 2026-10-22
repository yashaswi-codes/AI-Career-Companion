import { useState } from "react";
import { Link }                from "react-router-dom";
import { useQuiz }             from "../context/QuizContext";
import { useAuth }             from "../context/AuthContext";
import { getRoadmapByCareer }  from "../data/roadmaps";
import { CAREERS }             from "../data/careers";

const RoadmapPage = () => {
  const { quizResult }  = useQuiz();
  const { user }        = useAuth();

  // ✅ Selected career use karo
  const topCareer   = user?.targetCareer || quizResult?.topCareers?.[0]?.career || localStorage.getItem("selectedCareer") || "Software Developer";
  const careerData  = CAREERS[topCareer];
  const roadmapData = getRoadmapByCareer(topCareer);

  const [phases, setPhases] = useState(() => {
  const saved = localStorage.getItem(`roadmap_${topCareer}`);
    if (saved) return JSON.parse(saved);
    return roadmapData?.phases || [];
  });

  const [activeTab, setActiveTab] = useState("roadmap");

  const completedCount = phases.flatMap((p) => p.milestones).filter((m) => m.done).length;
  const totalCount     = phases.flatMap((p) => p.milestones).length;
  const progress       = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  



  const toggleMilestone = (phaseIndex, milestoneIndex) => {
  setPhases((prev) => {
    const updated = prev.map((phase, pi) => {
      if (pi !== phaseIndex) return phase;
      const updatedMilestones = phase.milestones.map((m, mi) =>
        mi === milestoneIndex ? { ...m, done: !m.done } : m
      );
      return {
        ...phase,
        milestones: updatedMilestones,
        status: updatedMilestones.every((m) => m.done)
          ? "completed"
          : updatedMilestones.some((m) => m.done)
          ? "in_progress"
          : "locked",
      };
    });
    
    localStorage.setItem(`roadmap_${topCareer}`, JSON.stringify(updated));
    return updated;
    });
  };

  const getPhaseColor = (status) => {
    switch (status) {
      case "completed":   return "bg-green-500";
      case "in_progress": return "bg-blue-500";
      default:            return "bg-slate-300 dark:bg-slate-600";
    }
  };

  const getPhaseTextColor = (status) => {
    switch (status) {
      case "completed":   return "text-green-600 dark:text-green-400";
      case "in_progress": return "text-blue-600 dark:text-blue-400";
      default:            return "text-slate-400 dark:text-slate-500";
    }
  };

  if (!roadmapData) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🗺️</div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
            No Roadmap Found
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Complete the quiz to get your personalized roadmap!
          </p>
          <Link
            to="/quiz"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all"
          >
            Take Quiz →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-8 animate-fadeIn">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{careerData?.emoji || "🗺️"}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                {topCareer} Roadmap
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                {roadmapData.totalDuration} journey • Personalized for you
              </p>
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-slate-900 dark:text-white">
              Overall Progress
            </h2>
            <span className="text-2xl font-black text-blue-500">
              {progress}%
            </span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3">
            <div
              className="h-3 rounded-full bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-400">
            <span>
              {phases.flatMap((p) => p.milestones).filter((m) => m.done).length} completed
            </span>
            <span>
              {phases.flatMap((p) => p.milestones).length} total milestones
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {["roadmap", "resources", "career"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl font-medium text-sm capitalize transition-all ${
                activeTab === tab
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              }`}
            >
              {tab === "roadmap"   ? "🗺️ Roadmap"  :
               tab === "resources" ? "📚 Resources" :
               "💼 Career Info"}
            </button>
          ))}
        </div>

        {/* ── Roadmap Tab ───────────────────────────────────── */}
        {activeTab === "roadmap" && (
          <div className="space-y-6">
            {phases.map((phase, phaseIndex) => (
              <div
                key={phaseIndex}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 overflow-hidden"
              >
                {/* Phase Header */}
                <div className={`px-6 py-4 flex items-center justify-between ${
                  phase.status === "completed"   ? "bg-green-50 dark:bg-green-900/20"  :
                  phase.status === "in_progress" ? "bg-blue-50 dark:bg-blue-900/20"    :
                  "bg-slate-50 dark:bg-slate-700/50"
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold ${getPhaseColor(phase.status)}`}>
                      {phase.status === "completed" ? "✓" : phaseIndex + 1}
                    </div>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wide ${getPhaseTextColor(phase.status)}`}>
                        {phase.phase}
                      </p>
                      <h3 className="font-bold text-slate-800 dark:text-white">
                        {phase.title}
                      </h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">
                      ⏱️ {phase.duration}
                    </span>
                    <p className={`text-xs font-semibold mt-0.5 ${getPhaseTextColor(phase.status)}`}>
                      {phase.status === "completed"   ? "✅ Completed"   :
                       phase.status === "in_progress" ? "🔵 In Progress" :
                       "🔒 Locked"}
                    </p>
                  </div>
                </div>

                {/* Milestones */}
                <div className="p-4 space-y-3">
                  {phase.milestones.map((milestone, milestoneIndex) => (
                    <div
                      key={milestoneIndex}
                      onClick={() => toggleMilestone(phaseIndex, milestoneIndex)}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-md ${
                        milestone.done
                          ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                          : "bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:border-blue-300"
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                        milestone.done
                          ? "bg-green-500 border-green-500"
                          : "border-slate-300 dark:border-slate-500"
                      }`}>
                        {milestone.done && (
                          <span className="text-white text-xs font-bold">✓</span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className={`font-semibold text-sm ${
                          milestone.done
                            ? "line-through text-slate-400"
                            : "text-slate-800 dark:text-white"
                        }`}>
                          {milestone.title}
                        </p>
                        {milestone.resources && milestone.resources.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {milestone.resources.slice(0, 3).map((resource, ri) => (
                              <span
                                key={ri}
                                className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full"
                              >
                                📎 {resource}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* ── Resources Tab ─────────────────────────────────── */}
        {activeTab === "resources" && careerData && (
          <div className="space-y-5">

            {/* YouTube */}
            {careerData.youtube && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>▶️</span> YouTube Channels
                </h3>
                <div className="flex flex-wrap gap-2">
                  {careerData.youtube.map((channel, i) => (
                    <a
                      key={i}
                      href={`https://youtube.com/results?search_query=${encodeURIComponent(channel)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-xl text-sm font-medium hover:shadow-md transition-all"
                    >
                      ▶️ {channel}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Resources */}
            {careerData.resources && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>📚</span> Learning Resources
                </h3>
                <div className="space-y-3">
                  {careerData.resources.map((resource, i) => (
                    <a
                      key={i}
                      href={resource.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">
                          {resource.free ? "🆓" : "💳"}
                        </span>
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-white text-sm group-hover:text-blue-500 transition-colors">
                            {resource.title}
                          </p>
                          <span className={`text-xs font-bold ${
                            resource.free ? "text-green-500" : "text-orange-500"
                          }`}>
                            {resource.free ? "FREE" : "PAID"}
                          </span>
                        </div>
                      </div>
                      <span className="text-slate-400 group-hover:text-blue-500 transition-colors">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tools */}
            {careerData.tools && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>🛠️</span> Tools to Master
                </h3>
                <div className="flex flex-wrap gap-2">
                  {careerData.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800 rounded-xl text-sm font-medium"
                    >
                      🔧 {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Mentors */}
            {careerData.mentors && careerData.mentors.length > 0 && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>👥</span> Learn from the Best
                </h3>
                <div className="flex flex-wrap gap-2">
                  {careerData.mentors.map((mentor, i) => (
                    <a
                      key={i}
                      href={`https://linkedin.com/search/results/all/?keywords=${encodeURIComponent(mentor)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 rounded-xl text-sm font-medium hover:shadow-md transition-all"
                    >
                      ⭐ {mentor}
                    </a>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* ── Career Info Tab ───────────────────────────────── */}
        {activeTab === "career" && careerData && (
          <div className="space-y-5">

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{careerData.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {topCareer}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    {careerData.description}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                  <p className="text-xs text-green-600 dark:text-green-400 font-semibold mb-1">
                    💰 Salary Range
                  </p>
                  <p className="font-bold text-slate-800 dark:text-white text-sm">
                    {careerData.salary}
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    📈 Future Scope
                  </p>
                  <p className="font-bold text-slate-800 dark:text-white text-sm">
                    {careerData.future}
                  </p>
                </div>
              </div>
            </div>

            {careerData.skills && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                  🎯 Skills Required
                </h3>
                <div className="flex flex-wrap gap-2">
                  {careerData.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-white mb-4">
                ⏱️ Journey Duration
              </h3>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-blue-500">
                  {roadmapData.totalDuration}
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  Estimated time to become job-ready in {topCareer}
                </p>
              </div>
            </div>

            {/* ✅ Back to Dashboard */}
            <div className="flex justify-center">
              <Link
                to="/dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                ← Back to Dashboard
              </Link>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default RoadmapPage;