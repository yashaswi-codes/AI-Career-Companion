import { useNavigate, Navigate, Link } from "react-router-dom";
import { useQuiz }                     from "../context/QuizContext";
import { useAuth }                     from "../context/AuthContext";
import { apiClient }                   from "../services/authService";
import { CAREERS }                     from "../data/careers";
import { CATEGORIES }                  from "../data/categories";

const CareerResultPage = () => {
  const navigate                      = useNavigate();
  const { quizResult, resetQuiz, chooseCareer, selectedCareer } = useQuiz();
  const { isAuthenticated, user, updateUser } = useAuth();

  if (!quizResult) return <Navigate to="/quiz" replace />;

  const { topCareers, selectedCategory } = quizResult;

  const categoryInfo = CATEGORIES.find((c) => c.id === selectedCategory);

  const handleRetake = () => {
    resetQuiz();
    navigate("/quiz");
  };

  // ✅ Career Choose Karne Ka Handler
  const handleChooseCareer = async (career) => {
    chooseCareer(career);
    localStorage.setItem("selectedCareer", career);
    
    if (isAuthenticated) {
      try {
        await apiClient.post("/quiz/select-career", { career });
        if (user) {
          updateUser({ ...user, targetCareer: career });
        }
      } catch (err) {
        console.error("Failed to save selected career:", err);
      }
      navigate("/dashboard");
    } else {
      // Guest — pehle signup karwao
      navigate("/signup");
    }
  };

  const rankLabels = [
    { label: "Best Match",   color: "from-yellow-400 to-orange-500",  border: "border-yellow-400", bg: "bg-yellow-50 dark:bg-yellow-900/20"   },
    { label: "Great Match",  color: "from-blue-400 to-cyan-500",      border: "border-blue-400",   bg: "bg-blue-50 dark:bg-blue-900/20"       },
    { label: "Good Match",   color: "from-purple-400 to-pink-500",    border: "border-purple-400", bg: "bg-purple-50 dark:bg-purple-900/20"   },
    { label: "Strong Match", color: "from-green-400 to-emerald-500",  border: "border-green-400",  bg: "bg-green-50 dark:bg-green-900/20"     },
    { label: "Solid Match",  color: "from-slate-400 to-slate-500",    border: "border-slate-400",  bg: "bg-slate-50 dark:bg-slate-700/50"     },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* ✅ Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-slate-500 hover:text-blue-500 font-medium text-sm transition-colors"
        >
          ← Go Back
        </button>

        {/* Header */}
        <div className="text-center mb-10 animate-fadeIn">
          {categoryInfo && (
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r ${categoryInfo.color} text-white text-sm font-bold mb-4 shadow-lg`}>
              <span>{categoryInfo.emoji}</span>
              <span>{categoryInfo.label}</span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3">
            Your Career Matches 🎯
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Pick the career you want to pursue — we'll build your roadmap!
          </p>
        </div>

        {/* Top 5 Career Cards */}
        <div className="space-y-4 mb-10">
          {topCareers?.map((item, index) => {
            const careerData = CAREERS[item.career];
            const rank       = rankLabels[index] || rankLabels[4];
            const isSelected = selectedCareer === item.career;

            return (
              <div
                key={item.career}
                className={`bg-white dark:bg-slate-800 rounded-2xl border-2 ${
                  isSelected ? "border-green-500 ring-4 ring-green-100 dark:ring-green-900/30" : rank.border
                } p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">

                  <div className="flex items-center gap-4 shrink-0">
                    <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${rank.color} flex items-center justify-center text-white font-black text-lg shadow-lg`}>
                      #{index + 1}
                    </div>
                    <div className="text-4xl">
                      {careerData?.emoji || "💼"}
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.career}
                      </h2>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${rank.bg} border ${rank.border}`}>
                        {rank.label}
                      </span>
                      {isSelected && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-300">
                          ✓ Selected
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-3">
                      {careerData?.description || "Exciting career opportunity"}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-slate-100 dark:bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-linear-to-r ${rank.color} transition-all duration-700`}
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-300 shrink-0">
                        {item.percentage}% match
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0 md:text-right md:items-end">
                    {careerData?.salary && (
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        💰 {careerData.salary}
                      </div>
                    )}

                    {/* ✅ Choose This Career Button */}
                    <button
                      onClick={() => handleChooseCareer(item.career)}
                      className={`mt-2 px-5 py-2 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                        isSelected
                          ? "bg-green-500 text-white"
                          : "bg-linear-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30"
                      }`}
                    >
                      {isSelected ? "✓ Selected" : "Choose This Career →"}
                    </button>
                  </div>

                </div>

                {careerData?.skills && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                      KEY SKILLS
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {careerData.skills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Guest Note */}
        {!isAuthenticated && (
          <div className="mb-8">
            <div className="bg-linear-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-8 translate-x-8" />
              <div className="relative z-10">
                <div className="text-4xl mb-3">🔐</div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Choose a career above to save your results!
                </h2>
                <p className="text-blue-100 mb-6 max-w-md mx-auto">
                  Clicking "Choose This Career" will take you to sign up — then we'll save your career and build your roadmap.
                </p>
                <Link
                  to="/login"
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-xl transition-all"
                >
                  Already have an account? Login
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Retake Quiz */}
        <div className="flex justify-center">
          <button
            onClick={handleRetake}
            className="bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-bold px-8 py-4 rounded-2xl transition-all"
          >
            Retake Quiz 🔄
          </button>
        </div>

      </div>
    </div>
  );
};

export default CareerResultPage;