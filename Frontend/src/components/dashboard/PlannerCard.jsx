import { Link } from "react-router-dom";

const PlannerCard = ({ tasks = [] }) => {
  const defaultTasks = [
    { id: 1, title: "Complete React Hooks tutorial", priority: "high",   done: true  },
    { id: 2, title: "Solve 2 LeetCode problems",     priority: "high",   done: true  },
    { id: 3, title: "Read Node.js docs",             priority: "medium", done: false },
    { id: 4, title: "Watch CSS Grid tutorial",       priority: "low",    done: false },
  ];

  const displayTasks = tasks.length ? tasks : defaultTasks;
  const completed    = displayTasks.filter((t) => t.done).length;
  const total        = displayTasks.length;
  const progress     = Math.round((completed / total) * 100);

  const priorityColors = {
    high:   "bg-red-100 dark:bg-red-900/30 text-red-500",
    medium: "bg-orange-100 dark:bg-orange-900/30 text-orange-500",
    low:    "bg-green-100 dark:bg-green-900/30 text-green-500",
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-900 dark:text-white text-lg">
          Today's Tasks
        </h3>
        <Link
          to="/planner"
          className="text-sm text-blue-500 hover:text-blue-600 font-medium"
        >
          View All
        </Link>
      </div>

      {/* Progress */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-slate-500 dark:text-slate-400">
            {completed}/{total} completed
          </span>
          <span className="font-bold text-slate-700 dark:text-slate-300">
            {progress}%
          </span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2">
          <div
            className="bg-linear-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Task List */}
      <div className="space-y-2">
        {displayTasks.slice(0, 4).map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
          >
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
              task.done
                ? "bg-green-500 border-green-500"
                : "border-slate-300 dark:border-slate-500"
            }`}>
              {task.done && <span className="text-white text-xs">✓</span>}
            </div>
            <p className={`text-sm flex-1 truncate ${
              task.done
                ? "line-through text-slate-400"
                : "text-slate-700 dark:text-slate-300 font-medium"
            }`}>
              {task.title}
            </p>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
          </div>
        ))}
      </div>

      {/* Add Task Button */}
      <Link
        to="/planner"
        className="w-full mt-4 flex items-center justify-center gap-2 border-2 border-dashed border-slate-200 dark:border-slate-600 hover:border-blue-400 text-slate-400 hover:text-blue-500 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
      >
        <span className="text-lg">+</span>
        Add Task
      </Link>

    </div>
  );
};

export default PlannerCard;