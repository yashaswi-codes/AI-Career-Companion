const GoalCard = ({ goal }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Top Row */}
      <div className="flex items-start justify-between mb-3">
        <div className={`w-12 h-12 bg-linear-to-br ${goal.color} rounded-xl flex items-center justify-center text-2xl shadow-md`}>
          {goal.emoji}
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
          Due {goal.deadline}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-bold text-slate-800 dark:text-white mb-3">
        {goal.title}
      </h3>

      {/* Progress Bar */}
      <div className="mb-2">
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-slate-500 dark:text-slate-400">
            Progress
          </span>
          <span className="font-bold text-slate-800 dark:text-white">
            {goal.progress}%
          </span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3">
          <div
            className={`bg-linear-to-r ${goal.color} h-3 rounded-full transition-all duration-700`}
            style={{ width: `${goal.progress}%` }}
          />
        </div>
      </div>

      {/* Motivation */}
      <p className="text-xs text-slate-400 mt-2">
        {goal.progress < 50
          ? "Keep going! You can do it 💪"
          : "Great progress! Almost there 🔥"}
      </p>

    </div>
  );
};

export default GoalCard;