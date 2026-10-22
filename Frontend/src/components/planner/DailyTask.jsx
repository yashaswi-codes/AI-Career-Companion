const DailyTask = ({ task, onToggle, onDelete }) => {
  const priorityColors = {
    high:   "bg-red-100 dark:bg-red-900/30 text-red-500",
    medium: "bg-orange-100 dark:bg-orange-900/30 text-orange-500",
    low:    "bg-green-100 dark:bg-green-900/30 text-green-500",
  };

  return (
    <div className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200 hover:shadow-md ${
      task.status === "completed"
        ? "bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800"
        : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-blue-200"
    }`}>

      {/* Checkbox */}
      <button
        onClick={() => onToggle && onToggle(task.id)}
        className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
          task.status === "completed"
            ? "bg-green-500 border-green-500 text-white"
            : "border-slate-300 dark:border-slate-500 hover:border-blue-400"
        }`}
      >
        {task.status === "completed" && (
          <span className="text-xs font-bold">✓</span>
        )}
      </button>

      {/* Task Info */}
      <div className="flex-1 min-w-0">
        <p className={`font-semibold truncate ${
          task.status === "completed"
            ? "line-through text-slate-400"
            : "text-slate-800 dark:text-white"
        }`}>
          {task.title}
        </p>
        <div className="flex items-center gap-3 mt-1">
          {task.time && (
            <span className="text-xs text-slate-400">
              🕐 {task.time}
            </span>
          )}
          {task.duration && (
            <span className="text-xs text-slate-400">
              ⏱️ {task.duration}
            </span>
          )}
        </div>
      </div>

      {/* Priority */}
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 capitalize ${
        priorityColors[task.priority]
      }`}>
        {task.priority}
      </span>

      {/* Delete Button */}
      {onDelete && (
        <button
          onClick={() => onDelete(task.id)}
          className="opacity-0 group-hover:opacity-100 w-7 h-7 flex items-center justify-center text-slate-300 hover:text-red-500 transition-all duration-200"
        >
          🗑️
        </button>
      )}

    </div>
  );
};

export default DailyTask;