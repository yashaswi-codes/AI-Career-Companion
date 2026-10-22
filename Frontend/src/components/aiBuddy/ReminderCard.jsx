import { useState } from "react";

const ReminderCard = () => {
  const [reminders, setReminders] = useState([
    { id: 1, time: "9:00 AM",  text: "Start morning study session",   done: true,  emoji: "📚" },
    { id: 2, time: "1:00 PM",  text: "Solve 2 LeetCode problems",     done: false, emoji: "💻" },
    { id: 3, time: "4:00 PM",  text: "Watch tutorial video",          done: false, emoji: "▶️"  },
    { id: 4, time: "8:00 PM",  text: "Review today's notes",          done: false, emoji: "📝" },
  ]);

  const toggleReminder = (id) => {
    setReminders(reminders.map((r) =>
      r.id === id ? { ...r, done: !r.done } : r
    ));
  };

  const doneCount  = reminders.filter((r) => r.done).length;
  const totalCount = reminders.length;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">⏰</span>
          <h3 className="font-bold text-slate-900 dark:text-white">
            Today's Reminders
          </h3>
        </div>
        <span className="text-sm font-bold text-blue-500">
          {doneCount}/{totalCount}
        </span>
      </div>

      {/* Reminders List */}
      <div className="space-y-2">
        {reminders.map((reminder) => (
          <button
            key={reminder.id}
            onClick={() => toggleReminder(reminder.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 text-left ${
              reminder.done
                ? "bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800"
                : "bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:border-blue-300"
            }`}
          >
            {/* Emoji */}
            <span className={`text-lg ${reminder.done ? "grayscale" : ""}`}>
              {reminder.emoji}
            </span>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium truncate ${
                reminder.done
                  ? "line-through text-slate-400"
                  : "text-slate-700 dark:text-slate-300"
              }`}>
                {reminder.text}
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                {reminder.time}
              </p>
            </div>

            {/* Check */}
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
              reminder.done
                ? "bg-green-500 border-green-500 text-white"
                : "border-slate-300 dark:border-slate-500"
            }`}>
              {reminder.done && <span className="text-xs font-bold">✓</span>}
            </div>

          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5">
          <div
            className="bg-linear-to-r from-blue-500 to-purple-600 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${Math.round((doneCount / totalCount) * 100)}%` }}
          />
        </div>
      </div>

    </div>
  );
};

export default ReminderCard;