const WeeklyPlanner = ({ weekData = [] }) => {
  const defaultData = [
    { day: "Monday",    emoji: "💻", focus: "React & Frontend",      tasks: 5, done: 5, color: "bg-blue-500"   },
    { day: "Tuesday",   emoji: "🔧", focus: "Node.js & Backend",     tasks: 4, done: 4, color: "bg-purple-500" },
    { day: "Wednesday", emoji: "🗄️", focus: "Database & MongoDB",    tasks: 4, done: 2, color: "bg-green-500"  },
    { day: "Thursday",  emoji: "🧮", focus: "DSA & Problem Solving", tasks: 5, done: 0, color: "bg-orange-500" },
    { day: "Friday",    emoji: "🚀", focus: "Projects & Portfolio",  tasks: 3, done: 0, color: "bg-pink-500"   },
    { day: "Saturday",  emoji: "📖", focus: "Reading & Research",    tasks: 2, done: 0, color: "bg-cyan-500"   },
    { day: "Sunday",    emoji: "🔄", focus: "Revision & Rest",       tasks: 2, done: 0, color: "bg-slate-500"  },
  ];

  const data = weekData.length ? weekData : defaultData;

  return (
    <div className="space-y-3">
      {data.map((day, index) => {
        const pct = Math.round((day.done / day.tasks) * 100);
        const isToday = index === new Date().getDay() - 1;

        return (
          <div
            key={index}
            className={`bg-white dark:bg-slate-800 rounded-2xl p-4 border transition-all duration-200 hover:shadow-md ${
              isToday
                ? "border-blue-300 dark:border-blue-700 shadow-md"
                : "border-slate-100 dark:border-slate-700"
            }`}
          >
            <div className="flex items-center gap-4">

              {/* Day Emoji */}
              <div className={`w-12 h-12 ${day.color} rounded-xl flex items-center justify-center text-xl shrink-0 shadow-md`}>
                {day.emoji}
              </div>

              {/* Day Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800 dark:text-white">
                      {day.day}
                    </span>
                    {isToday && (
                      <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full">
                        Today
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 shrink-0 ml-2">
                    {day.done}/{day.tasks}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  {day.focus}
                </p>
                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
                  <div
                    className={`${day.color} h-1.5 rounded-full transition-all duration-500`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WeeklyPlanner;