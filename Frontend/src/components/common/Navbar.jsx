import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { path: "/",       label: "Home"    },
    { path: "/browse-careers", label: "Browse Careers" },
    { path: "/login",  label: "Login"   },
    { path: "/signup", label: "Sign Up" },
  ];

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-slate-800 dark:text-white text-lg">
              Career Companion
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium text-sm transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-blue-500"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-500"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* ✅ Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current mb-1" />
              <div className="w-5 h-0.5 bg-current" />
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-slate-600 dark:text-slate-300 hover:text-blue-500 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;