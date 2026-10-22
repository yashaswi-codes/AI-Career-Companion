import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import authService from "../services/authService";
import { useQuiz } from "../context/QuizContext";
import { apiClient } from "../services/authService";

const SignupPage = () => {
  const navigate  = useNavigate();
  const { login, updateUser } = useAuth();
  const { quizResult, selectedCareer, categoryAnswers, careerAnswers, selectedCategory } = useQuiz();

  const [formData, setFormData] = useState({
    name: "", email: "", password: "", confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading,    setIsLoading]    = useState(false);
  const [errors,       setErrors]       = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name)                                  newErrors.name            = "Name is required.";
    if (!formData.email)                                 newErrors.email           = "Email is required.";
    if (!formData.password)                              newErrors.password        = "Password is required.";
    if (formData.password.length < 8)                    newErrors.password        = "Password must be at least 8 characters.";
    if (formData.password !== formData.confirmPassword)  newErrors.confirmPassword = "Passwords do not match.";
    return newErrors;
  };

 
const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = validate();

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  setIsLoading(true);

  try {
    const { token, user } = await authService.register({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    });

    login(user, token);

    // 1. User selected a career before signup
    if (selectedCareer) {
      try {
        await apiClient.post("/quiz/select-career", {
          career: selectedCareer,
        });
      } catch (err) {
        console.error("Career save failed:", err);
      }

      updateUser({
        ...user,
        hasCompletedQuiz: false,
        targetCareer: selectedCareer,
      });

      navigate("/dashboard");
    }

    // 2. User completed the quiz before signup
    else if (quizResult) {
      try {
        await apiClient.post("/quiz/submit", {
          categoryAnswers,
          careerAnswers,
          selectedCategory,
        });
      } catch (err) {
        console.error("Quiz save failed:", err);
      }

      updateUser({
        ...user,
        hasCompletedQuiz: true,
        targetCareer:
          quizResult.topCareers?.[0]?.career || "",
      });

      navigate("/career-result");
    }

    // 3. New user who has not selected a career or completed quiz
    else {
      navigate("/quiz");
    }
  } catch (err) {
    setErrors({
      general:
        err?.response?.data?.message ||
        "Registration failed.",
    });
  } finally {
    setIsLoading(false);
  }
};
  
  const inputClass = (field) => `
    w-full bg-slate-50 dark:bg-slate-700
    border ${errors[field] ? "border-red-400" : "border-slate-200 dark:border-slate-600"}
    text-slate-800 dark:text-white placeholder-slate-400
    rounded-xl px-4 py-3 focus:outline-none
    focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all
  `;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4 py-12">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md animate-fadeIn">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30">
              <span className="text-white font-bold text-2xl">🚀</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              Create Account
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Start your AI-powered career journey today
            </p>
          </div>

          {/* General Error */}
          {errors.general && (
            <div className="mb-4 px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="text-red-600 dark:text-red-400 text-sm">{errors.general}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className={inputClass("name")}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClass("email")}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min 8 characters"
                  className={inputClass("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                className={inputClass("confirmPassword")}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Password Strength */}
            {formData.password && (
              <div>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        formData.password.length >= level * 3
                          ? level <= 1 ? "bg-red-400"
                          : level <= 2 ? "bg-orange-400"
                          : level <= 3 ? "bg-yellow-400"
                          : "bg-green-400"
                          : "bg-slate-200 dark:bg-slate-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  {formData.password.length < 4  ? "Weak"
                  : formData.password.length < 7  ? "Fair"
                  : formData.password.length < 10 ? "Good"
                  : "Strong 💪"}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Creating account...
                </>
              ) : "Create Account 🚀"}
            </button>

          </form>

          <p className="text-center text-slate-500 dark:text-slate-400 mt-6 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:text-blue-600 font-semibold">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default SignupPage;