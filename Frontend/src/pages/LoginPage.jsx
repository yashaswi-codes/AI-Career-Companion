import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import authService from "../services/authService";
import { useQuiz } from "../context/QuizContext";


const LoginPage = () => {
  const navigate        = useNavigate();
  const { login }       = useAuth();
  const { quizResult} = useQuiz();
  const [formData,     setFormData]     = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading,    setIsLoading]    = useState(false);
  const [error,        setError]        = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

    const handleSubmit = async (e) => {
    e.preventDefault();

    const email = formData.email.trim();

    if (!email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await authService.login({
        email,
        password: formData.password,
      });

      const { token, user } = response || {};

      if (!token || !user) {
        throw new Error(
          "Login response is missing the user or authentication token."
        );
      }

      login(user, token);

      if (user.hasCompletedQuiz) {
        navigate("/dashboard");
      } else if (quizResult) {
        navigate("/career-result");
      } else {
        navigate("/quiz");
      }
    } catch (err) {
      console.error("Login error:", {
        status: err?.response?.status,
        message: err?.response?.data?.message || err?.message,
      });

      const status = err?.response?.status;

      if (status === 401 || status === 400) {
        setError("Login failed. Please verify your email and password.");
      } else if (status === 404) {
        setError("Login API endpoint not found. Please check the backend route.");
      } else if (status >= 500) {
        setError("Server error. Please check the backend terminal.");
      } else if (!err?.response) {
        setError("Cannot connect to the server. Please check your backend.");
      } else {
        setError(
          err?.response?.data?.message || "Unable to login. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center px-4 py-12">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md animate-fadeIn">
        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-2xl">AI</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              Welcome Back!
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Login to continue your career journey
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
              <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

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
                className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
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
                  placeholder="Enter your password"
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-white placeholder-slate-400 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Logging in...
                </>
              ) : "Login"}
            </button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
            <span className="text-slate-400 text-sm">or</span>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Guest */}
          <button
            onClick={() => navigate("/quiz")}
            className="w-full border-2 border-slate-200 dark:border-slate-600 hover:border-blue-500 text-slate-600 dark:text-slate-300 hover:text-blue-500 font-semibold py-3 rounded-xl transition-all duration-200"
          >
            Continue as Guest 👤
          </button>

          <p className="text-center text-slate-500 dark:text-slate-400 mt-6 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-semibold">
              Sign up free
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;