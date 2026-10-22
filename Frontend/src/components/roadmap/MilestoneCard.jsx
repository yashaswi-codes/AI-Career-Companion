const MilestoneCard = ({ milestone }) => {
  return (
    <div className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-200 ${
      milestone.done
        ? "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800"
        : "bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600"
    }`}>

      {/* Checkbox */}
      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
        milestone.done
          ? "bg-green-500 text-white"
          : "border-2 border-slate-300 dark:border-slate-500"
      }`}>
        {milestone.done && <span className="text-xs font-bold">✓</span>}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold ${
          milestone.done
            ? "line-through text-slate-400"
            : "text-slate-800 dark:text-white"
        }`}>
          {milestone.title}
        </p>

        {/* Resources */}
        {milestone.resources && milestone.resources.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1.5">
            {milestone.resources.map((res, i) => (
              <span
                key={i}
                className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full"
              >
                📎 {res}
              </span>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default MilestoneCard;