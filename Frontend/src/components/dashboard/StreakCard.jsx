const StreakCard = ({ streak = 0, weekData = [] }) => {
  const weekDays    = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const defaultWeek = [true, true, true, true, false, false, false];
  const days        = weekData.length ? weekData : defaultWeek;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-900 dark:text-white text-lg">
          Weekly Streak
        </h3>
        <span className="text-2xl">🔥</span>
      </div>

      {/* Streak Number */}
      <div className="text-center mb-5">
        <div className="text-6xl font-black bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          {streak || 7}
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          day streak
        </p>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-1 mb-4">
        {weekDays.map((day, index) => (
          <div key={index} className="flex flex-col items-center gap-1">
            <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs transition-all ${
              days[index]
                ? "bg-linear-to-br from-orange-400 to-red-500 text-white shadow-md"
                : "bg-slate-100 dark:bg-slate-700 text-slate-400"
            }`}>
              {days[index] ? "🔥" : "○"}
            </div>
            <span className="text-xs text-slate-400">{day}</span>
          </div>
        ))}
      </div>

      {/* Motivation */}
      <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
        <p className="text-sm text-orange-700 dark:text-orange-300 font-medium text-center">
          🎯 Keep going! You are on fire!
        </p>
      </div>

    </div>
  );
};

export default StreakCard;