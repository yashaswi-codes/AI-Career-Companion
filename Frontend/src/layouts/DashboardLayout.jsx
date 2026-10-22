import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate                           = useNavigate();
  const isGuest = !localStorage.getItem("acc_token") &&
                !!localStorage.getItem("guestSelectedCareer");

  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
  if (!isGuest) return;

  const timer = setTimeout(() => {
    setShowLoginPopup(true);
  }, 10000);

  return () => clearTimeout(timer);
  }, [isGuest]);

  
  // ✅ AuthContext se user lo
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme(); 

  const navLinks = [
    { path: "/dashboard", label: "Dashboard", emoji: "📊" },
    { path: "/roadmap",   label: "Roadmap",   emoji: "🗺️" },
    { path: "/resources", label: "Resources", emoji: "📚" },
    { path: "/ai-tools",  label: "AI Tools",  emoji: "🛠️" },
    { path: "/planner",   label: "Planner",   emoji: "📅" },
    { path: "/mentors",   label: "Mentors",   emoji: "👥" },
    { path: "/chatbot",   label: "Chatbot",   emoji: "🤖" },
    { path: "/profile",   label: "Profile",   emoji: "👤" },
  ];

  // ✅ Logout handler
  const handleLogout = () => {
    logout();
    // ✅ State clear hone ke baad navigate
    setTimeout(() => navigate("/"), 50);

  };

  // ✅ User name ka pehla letter
  const userInitial = user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex">

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-64 z-30
        bg-white dark:bg-slate-900
        border-r border-slate-200 dark:border-slate-700
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}>

        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-200 dark:border-slate-700">
          <div className="w-9 h-9 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">AI</span>
          </div>
          <span className="font-bold text-slate-800 dark:text-white text-lg">
            Career Companion
          </span>
        </div>

        {/* ✅ User Info */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white font-bold">{userInitial}</span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-slate-800 dark:text-white text-sm truncate">
                {user?.name || "User"}
              </p>
              <p className="text-xs text-slate-400 truncate">
                {user?.email || ""}
              </p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="p-4 space-y-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`
              }
            >
              <span className="text-lg">{link.emoji}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* ✅ Logout Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 font-medium text-sm transition-all duration-200"
          >
            <span className="text-lg">🚪</span>
            <span>Logout</span>
          </button>
        </div>

      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">

        {/* Top Navbar */}
        <header className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Mobile Menu */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <div className="w-5 h-0.5 bg-slate-600 dark:bg-slate-300 rounded" />
              <div className="w-5 h-0.5 bg-slate-600 dark:bg-slate-300 rounded" />
              <div className="w-5 h-0.5 bg-slate-600 dark:bg-slate-300 rounded" />
            </button>

            <h2 className="hidden lg:block font-bold text-slate-800 dark:text-white text-lg">
              AI Career Companion
            </h2>

            {/* Right Side */}
            <div className="flex items-center gap-3 ml-auto">



                {/* ✅ Theme Toggle */}
                <button
                onClick={toggleTheme}
                className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
                >
                {theme === "dark" ? "☀️" : "🌙"}
                </button>

              {/* ✅ Streak — user se lo */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl">
                <span>🔥</span>
                <span className="text-sm font-bold text-orange-600 dark:text-orange-400">
                  {user?.streak || 0}
                </span>
              </div>

              {/* ✅ Profile Avatar — actual initial */}
              <button
                onClick={() => navigate("/profile")}
                className="w-9 h-9 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <span className="text-white text-sm font-bold">
                  {userInitial}
                </span>
              </button>

            </div>
          </div>
        </header>

        {/* Page Content */}
        
        {/* Page Content */}
        <main className="flex-1 overflow-auto relative">
          <Outlet />

          {isGuest && showLoginPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
              <div className="w-full max-w-md rounded-2xl bg-white p-7 text-center shadow-2xl dark:bg-slate-800">
                <div className="mb-4 text-5xl">🔐</div>

                <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                  Login to Continue
                </h2>

                <p className="mb-6 text-slate-600 dark:text-slate-300">
                  Create an account or log in to unlock all career features.
                </p>

                <button
                  onClick={() => navigate("/login")}
                  className="mb-3 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/signup")}
                  className="w-full rounded-xl bg-purple-600 px-5 py-3 font-bold text-white hover:bg-purple-700"
                >
                  Create Account
                </button>
              </div>
            </div>
          )}
        </main>

      </div>
    </div>
  );
};

export default DashboardLayout;