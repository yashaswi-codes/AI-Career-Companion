import MilestoneCard from "./MilestoneCard";

const RoadmapTimeline = ({ phases = [], activePhase = 0, onPhaseClick }) => {
  return (
    <div className="relative">

      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block" />

      {/* Phases */}
      <div className="space-y-6">
        {phases.map((phase, index) => (
          <div key={index} className="relative">

            {/* Timeline Dot */}
            <div className={`absolute left-4 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center z-10 transition-all duration-300 ${
              phase.status === "completed"
                ? "bg-green-500 border-green-500"
                : phase.status === "in_progress"
                ? "bg-blue-500 border-blue-500 shadow-lg shadow-blue-500/50"
                : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600"
            }`}>
              {phase.status === "completed" && (
                <span className="text-white text-xs font-bold">✓</span>
              )}
              {phase.status === "in_progress" && (
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              )}
            </div>

            {/* Phase Content */}
            <div className="md:ml-14">
              <button
                onClick={() => onPhaseClick && onPhaseClick(index)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                  activePhase === index
                    ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-700 shadow-md"
                    : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-blue-200 hover:shadow-sm"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-blue-500">
                      {phase.phase}
                    </span>
                    <h3 className="font-bold text-slate-800 dark:text-white">
                      {phase.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">
                      {phase.duration}
                    </span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      phase.status === "completed"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                        : phase.status === "in_progress"
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "bg-slate-100 dark:bg-slate-700 text-slate-500"
                    }`}>
                      {phase.status === "completed"   ? "Done ✅"
                       : phase.status === "in_progress" ? "Active 🔄"
                       : "Locked 🔒"}
                    </span>
                  </div>
                </div>

                {/* Mini Progress */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        phase.status === "completed"
                          ? "bg-green-500"
                          : phase.status === "in_progress"
                          ? "bg-blue-500"
                          : "bg-slate-300"
                      }`}
                      style={{
                        width: `${Math.round(
                          (phase.milestones.filter((m) => m.done).length /
                            phase.milestones.length) * 100
                        )}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-slate-400 shrink-0">
                    {phase.milestones.filter((m) => m.done).length}/
                    {phase.milestones.length}
                  </span>
                </div>

                {/* Milestones — show when active */}
                {activePhase === index && (
                  <div className="mt-4 space-y-2">
                    {phase.milestones.map((milestone, mIndex) => (
                      <MilestoneCard
                        key={mIndex}
                        milestone={milestone}
                      />
                    ))}
                  </div>
                )}

              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTimeline;