import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const PlannerPage = () => {
  const { user } = useAuth();

  // Keep planner data separated by the signed-in user's stable identifier.
  const userKey = user?.id || user?._id || user?.email;
  const storageKey = userKey
    ? `planner_tasks_${userKey}`
    : "planner_tasks_guest";
  const weeklyStorageKey = userKey
    ? `planner_weekly_${userKey}`
    : "planner_weekly_guest";
  const goalsStorageKey = userKey
    ? `planner_goals_${userKey}`
    : "planner_goals_guest";

  const [activeTab, setActiveTab] = useState("daily");
  const [confirmDialog, setConfirmDialog] = useState(null);

  const [loadedStorageKey, setLoadedStorageKey] = useState(null);
  const [loadedWeeklyStorageKey, setLoadedWeeklyStorageKey] = useState(null);
  const [loadedGoalsStorageKey, setLoadedGoalsStorageKey] = useState(null);
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    priority: "medium",
    time: "",
    duration: "",
  });

  const [weeklyPlans, setWeeklyPlans] = useState([]);
  const [goals, setGoals] = useState([]);

  const [showWeeklyForm, setShowWeeklyForm] = useState(false);
  const [newWeeklyPlan, setNewWeeklyPlan] = useState({
    day: "Monday",
    focus: "",
    details: "",
  });

  const [weeklyFocus, setWeeklyFocus] = useState("");

  const [showGoalForm, setShowGoalForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: "",
    deadline: "",
  });

  // Load tasks whenever the active account changes.
  useEffect(() => {
  const timer = setTimeout(() => {
    try {
      const savedTasks = localStorage.getItem(storageKey);
      const parsedTasks = savedTasks ? JSON.parse(savedTasks) : [];
      setTasks(Array.isArray(parsedTasks) ? parsedTasks : []);
      } catch (error) {
        console.error("Could not load planner tasks:", error);
        setTasks([]);
      }

      setLoadedStorageKey(storageKey);
    }, 0);

    return () => clearTimeout(timer);
  }, [storageKey]);

  // Don't save the previous account's tasks under a newly selected account.
  useEffect(() => {
    if (loadedStorageKey !== storageKey) return;

    try {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
    } catch (error) {
      console.error("Could not save planner tasks:", error);
    }
  }, [tasks, loadedStorageKey, storageKey]);

  // Load and save weekly plan separately for each account.
  useEffect(() => {
  const timer = setTimeout(() => {
    try {
      const saved = localStorage.getItem(weeklyStorageKey);
      const parsed = saved ? JSON.parse(saved) : {};

      setWeeklyPlans(Array.isArray(parsed.plans) ? parsed.plans : []);
      setWeeklyFocus(
        typeof parsed.focus === "string" ? parsed.focus : ""
      );
    } catch (error) {
      console.error("Could not load weekly plan:", error);
      setWeeklyPlans([]);
      setWeeklyFocus("");
    }

      setLoadedWeeklyStorageKey(weeklyStorageKey);
      }, 0);

      return () => clearTimeout(timer);
    }, [weeklyStorageKey]);

  useEffect(() => {
    if (loadedWeeklyStorageKey !== weeklyStorageKey) return;
    try {
      localStorage.setItem(
        weeklyStorageKey,
        JSON.stringify({ plans: weeklyPlans, focus: weeklyFocus })
      );
    } catch (error) {
      console.error("Could not save weekly plan:", error);
    }
  }, [weeklyPlans, weeklyFocus, loadedWeeklyStorageKey, weeklyStorageKey]);

  // Load and save goals separately for each account.
  useEffect(() => {
  const timer = setTimeout(() => {
    try {
      const saved = localStorage.getItem(goalsStorageKey);
      const parsed = saved ? JSON.parse(saved) : [];

      setGoals(Array.isArray(parsed) ? parsed : []);
    } catch (error) {
      console.error("Could not load goals:", error);
      setGoals([]);
    }

    setLoadedGoalsStorageKey(goalsStorageKey);
  }, 0);

  return () => clearTimeout(timer);
  }, [goalsStorageKey]);
  

  useEffect(() => {
    if (loadedGoalsStorageKey !== goalsStorageKey) return;
    try {
      localStorage.setItem(goalsStorageKey, JSON.stringify(goals));
    } catch (error) {
      console.error("Could not save goals:", error);
    }
  }, [goals, loadedGoalsStorageKey, goalsStorageKey]);

  const priorityColors = {
    high: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    medium:
      "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
    low: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
  };

  const toggleTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "completed" ? "pending" : "completed",
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  };

  const clearAllTasks = () => {
    if (tasks.length === 0) return;

    setConfirmDialog({
      title: "Clear all tasks?",
      message: "This will remove all your daily planner tasks. This action cannot be undone.",
      confirmLabel: "Clear tasks",
      onConfirm: () => setTasks([]),
    });
  };

  const addTask = () => {
    if (!newTask.title.trim()) return;

    const task = {
      id:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random()}`,
      title: newTask.title.trim(),
      priority: newTask.priority,
      status: "pending",
      time: newTask.time.trim() || "TBD",
      duration: newTask.duration.trim() || "30 min",
    };

    setTasks((previousTasks) => [...previousTasks, task]);
    setNewTask({ title: "", priority: "medium", time: "", duration: "" });
    setShowAddTask(false);
  };

  
  const addWeeklyPlan = () => {
    if (!newWeeklyPlan.focus.trim()) return;
    const plan = {
      id: typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`,
      day: newWeeklyPlan.day,
      focus: newWeeklyPlan.focus.trim(),
      details: newWeeklyPlan.details.trim(),
      done: false,
    };
    setWeeklyPlans((prev) => [...prev, plan]);
    setNewWeeklyPlan({ day: "Monday", focus: "", details: "" });
    setShowWeeklyForm(false);
  };

  const toggleWeeklyPlan = (id) => {
    setWeeklyPlans((prev) => prev.map((plan) =>
      plan.id === id ? { ...plan, done: !plan.done } : plan
    ));
  };

  const deleteWeeklyPlan = (id) => {
    setWeeklyPlans((prev) => prev.filter((plan) => plan.id !== id));
  };

  const clearWeeklyPlans = () => {
    if (weeklyPlans.length === 0 && !weeklyFocus.trim()) return;
    setConfirmDialog({
      title: "Clear your weekly plan?",
      message: "All weekly milestones and your weekly focus will be removed.",
      confirmLabel: "Clear plan",
      onConfirm: () => {
        setWeeklyPlans([]);
        setWeeklyFocus("");
      },
    });
  };

  const addGoal = () => {
    if (!newGoal.title.trim()) return;
    const goal = {
      id: typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`,
      title: newGoal.title.trim(),
      deadline: newGoal.deadline,
      progress: 0,
      createdAt: new Date().toISOString(),
    };
    setGoals((prev) => [...prev, goal]);
    setNewGoal({ title: "", deadline: "" });
    setShowGoalForm(false);
  };

  const updateGoalProgress = (id, progress) => {
    setGoals((prev) => prev.map((goal) =>
      goal.id === id ? { ...goal, progress: Number(progress) } : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  const clearGoals = () => {
    if (goals.length === 0) return;
    setConfirmDialog({
      title: "Delete all your goals?",
      message: "All your goals and their progress will be permanently removed.",
      confirmLabel: "Delete goals",
      onConfirm: () => setGoals([]),
    });
  };

  const completedCount = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const totalCount = tasks.length;
  const progressPct =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  const tabs = [
    { id: "daily", label: "Daily Tasks", emoji: "📅" },
    { id: "weekly", label: "Weekly Plan", emoji: "🗓️" },
    { id: "goals", label: "Goals", emoji: "🎯" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">
                Study Planner 📅
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Plan, track and crush your daily learning goals
              </p>
            </div>

            {/* Today's progress */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl px-6 py-4 border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14">
                  <svg
                    className="w-14 h-14 -rotate-90"
                    viewBox="0 0 56 56"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="22"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="5"
                    />
                    <circle
                      cx="28"
                      cy="28"
                      r="22"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 22}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 22 * (1 - progressPct / 100)
                      }`}
                      className="transition-all duration-500"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-slate-800 dark:text-white">
                    {progressPct}%
                  </span>
                </div>
                <div>
                  <p className="font-bold text-slate-800 dark:text-white">
                    {completedCount}/{totalCount} Done
                  </p>
                  <p className="text-xs text-slate-400">Today's tasks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300"
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Daily Tasks */}
        {activeTab === "daily" && (
          <div>
            <div className="flex flex-wrap justify-end gap-3 mb-4">
              <button
                onClick={clearAllTasks}
                disabled={tasks.length === 0}
                className="px-4 py-2.5 rounded-xl border border-red-200 text-red-600 font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowAddTask((isOpen) => !isOpen)}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <span className="text-lg">+</span>
                Add Task
              </button>
            </div>

            {showAddTask && (
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-blue-200 dark:border-blue-700 mb-4 shadow-lg">
                <h3 className="font-bold text-slate-800 dark:text-white mb-4">
                  New Task
                </h3>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="Task title..."
                    value={newTask.title}
                    onChange={(event) =>
                      setNewTask({ ...newTask, title: event.target.value })
                    }
                    className="col-span-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                  />
                  <select
                    value={newTask.priority}
                    onChange={(event) =>
                      setNewTask({ ...newTask, priority: event.target.value })
                    }
                    className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                  >
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Low Priority</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Time (e.g. 3:00 PM)"
                    value={newTask.time}
                    onChange={(event) =>
                      setNewTask({ ...newTask, time: event.target.value })
                    }
                    className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Duration (e.g. 45 min)"
                    value={newTask.duration}
                    onChange={(event) =>
                      setNewTask({ ...newTask, duration: event.target.value })
                    }
                    className="md:col-span-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={addTask}
                    disabled={!newTask.title.trim()}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2.5 rounded-xl transition-all disabled:opacity-40"
                  >
                    Add Task
                  </button>
                  <button
                    onClick={() => setShowAddTask(false)}
                    className="flex-1 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-semibold py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {tasks.length === 0 ? (
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 px-6 py-14 text-center">
                <div className="text-5xl mb-3">📝</div>
                <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-2">
                  Your planner is empty
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-5">
                  Add your first task to start planning your day.
                </p>
                <button
                  onClick={() => setShowAddTask(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl"
                >
                  + Add Your First Task
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`bg-white dark:bg-slate-800 rounded-2xl p-4 border transition-all duration-200 hover:shadow-md ${
                      task.status === "completed"
                        ? "border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10"
                        : "border-slate-100 dark:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => toggleTask(task.id)}
                        aria-label={
                          task.status === "completed"
                            ? "Mark task as pending"
                            : "Mark task as completed"
                        }
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

                      <div className="flex-1 min-w-0">
                        <p
                          className={`font-semibold wrap-break-word ${
                            task.status === "completed"
                              ? "line-through text-slate-400"
                              : "text-slate-800 dark:text-white"
                          }`}
                        >
                          {task.title}
                        </p>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-slate-400">
                            🕐 {task.time}
                          </span>
                          <span className="text-xs text-slate-400">
                            ⏱️ {task.duration}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 capitalize ${
                          priorityColors[task.priority]
                        }`}
                      >
                        {task.priority}
                      </span>

                      <button
                        onClick={() => deleteTask(task.id)}
                        aria-label={`Delete ${task.title}`}
                        title="Delete task"
                        className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg p-2"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Weekly Plan */}
        {activeTab === "weekly" && (
          <div className="space-y-6">
            <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-white">My Weekly Focus</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Turn your weekly priorities into achievable milestones.</p>
                </div>
                <button onClick={() => setShowWeeklyForm((open) => !open)} className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium">
                  {showWeeklyForm ? "Cancel" : "+ Add Milestone"}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3"><p className="text-xs text-slate-500 dark:text-slate-400">Planned</p><p className="text-2xl font-bold text-slate-800 dark:text-white">{weeklyPlans.length}</p></div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3"><p className="text-xs text-slate-500 dark:text-slate-400">Completed</p><p className="text-2xl font-bold text-emerald-600">{weeklyPlans.filter((plan) => plan.done).length}</p></div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3"><p className="text-xs text-slate-500 dark:text-slate-400">Progress</p><p className="text-2xl font-bold text-blue-600">{weeklyPlans.length ? Math.round((weeklyPlans.filter((plan) => plan.done).length / weeklyPlans.length) * 100) : 0}%</p></div>
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">My main focus this week</label>
                <input type="text" value={weeklyFocus} onChange={(e) => setWeeklyFocus(e.target.value)} placeholder="e.g. Complete my portfolio project" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500" />
              </div>

              {showWeeklyForm && (
                <div className="mt-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 space-y-4">
                  <h3 className="font-semibold text-slate-800 dark:text-white">Add a milestone</h3>
                  <input type="text" value={newWeeklyPlan.focus} onChange={(e) => setNewWeeklyPlan({ ...newWeeklyPlan, focus: e.target.value })} placeholder="Milestone title" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white outline-none" />
                  <select value={newWeeklyPlan.day} onChange={(e) => setNewWeeklyPlan({ ...newWeeklyPlan, day: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => <option key={day} value={day}>{day}</option>)}
                  </select>
                  <textarea value={newWeeklyPlan.details} onChange={(e) => setNewWeeklyPlan({ ...newWeeklyPlan, details: e.target.value })} placeholder="Optional details or expected outcome" rows={2} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white outline-none" />
                  <button onClick={addWeeklyPlan} disabled={!newWeeklyPlan.focus.trim()} className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium">Save Milestone</button>
                </div>
              )}
            </section>

            {(weeklyPlans.length > 0 || weeklyFocus.trim()) && (
              <div className="flex justify-end"><button onClick={clearWeeklyPlans} className="text-sm text-red-500 hover:text-red-600">Clear Plan</button></div>
            )}

            {weeklyPlans.length > 0 ? (
              <div className="space-y-3">
                { ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => {
                  const dayPlans = weeklyPlans.filter((plan) => plan.day === day);
                  if (!dayPlans.length) return null;
                  return <section key={day} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4"><h3 className="font-semibold text-slate-700 dark:text-slate-200 mb-3">{day}</h3><div className="space-y-3">{dayPlans.map((plan) => <div key={plan.id} className="flex items-start gap-3"><input type="checkbox" checked={plan.done} onChange={() => toggleWeeklyPlan(plan.id)} className="mt-1 h-4 w-4 accent-blue-600" /><div className="flex-1 min-w-0"><p className={`font-medium wrap-break-word ${plan.done ? "line-through text-slate-400" : "text-slate-800 dark:text-white"}`}>{plan.focus}</p>{plan.details && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 wrap-break-word">{plan.details}</p>}</div><button onClick={() => deleteWeeklyPlan(plan.id)} aria-label="Delete milestone" className="text-slate-400 hover:text-red-500">✕</button></div>)}</div></section>;
                })}
              </div>
            ) : (
              <div className="bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 px-6 py-12 text-center"><div className="text-4xl mb-3">🎯</div><h3 className="font-bold text-slate-800 dark:text-white text-lg">Your week, your goals</h3><p className="text-slate-500 dark:text-slate-400 mt-2">Add your first milestone and start building momentum.</p></div>
            )}
          </div>
        )}

        {/* Goals */}
        {activeTab === "goals" && (
          <div className="space-y-6">
            <section className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div><h2 className="text-xl font-bold text-slate-800 dark:text-white">My Personal Goals</h2><p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Track the bigger things you want to achieve.</p></div>
                <button onClick={() => setShowGoalForm((open) => !open)} className="px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-medium">{showGoalForm ? "Cancel" : "+ Add Goal"}</button>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3"><p className="text-xs text-slate-500 dark:text-slate-400">Total goals</p><p className="text-2xl font-bold text-slate-800 dark:text-white">{goals.length}</p></div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-700/50 p-3"><p className="text-xs text-slate-500 dark:text-slate-400">Achieved</p><p className="text-2xl font-bold text-emerald-600">{goals.filter((goal) => goal.progress === 100).length}</p></div>
              </div>
              {showGoalForm && <div className="mt-5 p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 space-y-4"><h3 className="font-semibold text-slate-800 dark:text-white">Create a goal</h3><input type="text" value={newGoal.title} onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })} placeholder="e.g. Get a software developer job" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white outline-none" /><div><label className="block text-sm text-slate-600 dark:text-slate-300 mb-2">Target deadline (optional)</label><input type="date" value={newGoal.deadline} onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })} min={new Date().toISOString().slice(0, 10)} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white" /></div><button onClick={addGoal} disabled={!newGoal.title.trim()} className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white font-medium">Save Goal</button></div>}
            </section>

            {goals.length > 0 ? <div className="space-y-3"><div className="flex items-center justify-between"><h3 className="font-bold text-slate-800 dark:text-white">Your goals</h3><button onClick={clearGoals} className="text-sm text-red-500 hover:text-red-600">Clear Goals</button></div>{goals.map((goal) => <article key={goal.id} className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5"><div className="flex items-start gap-3"><div className="flex-1 min-w-0"><h3 className={`font-semibold wrap-break-word ${goal.progress === 100 ? "line-through text-slate-400" : "text-slate-800 dark:text-white"}`}>{goal.title}</h3><p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{goal.deadline ? `Deadline: ${goal.deadline}` : "No deadline set"}</p></div><button onClick={() => deleteGoal(goal.id)} aria-label={`Delete ${goal.title}`} className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg p-2">🗑️</button></div><div className="mt-5"><div className="flex justify-between items-center mb-2"><label className="text-sm font-medium text-slate-600 dark:text-slate-300">Progress</label><span className="text-sm font-bold text-violet-600">{goal.progress}%</span></div><input type="range" min="0" max="100" step="5" value={goal.progress} onChange={(e) => updateGoalProgress(goal.id, e.target.value)} aria-label={`Progress for ${goal.title}`} className="w-full accent-violet-600" /><div className="flex justify-between text-xs text-slate-400"><span>Not started</span><span>In progress</span><span>Achieved</span></div></div></article>)}</div> : <div className="bg-white dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-600 px-6 py-12 text-center"><div className="text-4xl mb-3">🌱</div><h3 className="font-bold text-slate-800 dark:text-white text-lg">Every big achievement starts small</h3><p className="text-slate-500 dark:text-slate-400 mt-2">Add a personal goal, set a deadline if you want, and track your progress.</p></div>}
          </div>
        )}

      </div>

      {confirmDialog && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setConfirmDialog(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="planner-confirm-title"
            className="w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-6 shadow-2xl animate-fadeIn"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 text-xl">⚠️</div>
            <h2 id="planner-confirm-title" className="text-xl font-bold text-slate-900 dark:text-white">
              {confirmDialog.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-300">
              {confirmDialog.message}
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setConfirmDialog(null)}
                className="rounded-xl border border-slate-200 dark:border-slate-600 px-4 py-2.5 font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  confirmDialog.onConfirm();
                  setConfirmDialog(null);
                }}
                className="rounded-xl bg-red-600 px-4 py-2.5 font-medium text-white hover:bg-red-700 transition"
              >
                {confirmDialog.confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlannerPage;
