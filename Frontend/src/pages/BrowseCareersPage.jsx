
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useQuiz } from "../context/QuizContext";
import { CATEGORIES } from "../data/categories";
import { CAREERS } from "../data/careers";
import { apiClient } from "../services/authService";

const BrowseCareersPage = () => {
  const navigate = useNavigate();

  const { isAuthenticated, user, updateUser } = useAuth();
  const { chooseCareer } = useQuiz();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const categoryCareers = selectedCategory
    ? Object.values(CAREERS).filter(
        (career) => career.category === selectedCategory
      )
    : [];

  const filteredCareers = categoryCareers.filter((career) =>
    career.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChooseCareer = async (career) => {
    // ✅ Old career data clear karo
    Object.keys(localStorage)
    .filter((k) => k.startsWith("roadmap_"))
    .forEach((k) => localStorage.removeItem(k));

    setSelectedCareer(career.title);
    chooseCareer(career.title);
    localStorage.setItem("selectedCareer", career.title);

    localStorage.removeItem("acc_quiz_data");

    
    if (isAuthenticated) {
      setIsLoading(true);

      try {
        await apiClient.post("/quiz/select-career", {
          career: career.title,
        });

        localStorage.removeItem("guestSelectedCareer");
            updateUser({ ...user, targetCareer: career.title });
            navigate("/dashboard");
        } catch (err) {
            console.error("Career selection failed:", err);
        } finally {
            setIsLoading(false);
        }
        } else {
        localStorage.setItem("guestSelectedCareer", career.title);
        navigate("/dashboard");
        }
    };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <main className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Heading */}
          <div className="text-center mb-10 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-3">
              Browse Careers 🎯
            </h1>

            <p className="text-slate-500 dark:text-slate-400 text-lg">
              {selectedCategory
                ? "Choose your career and get started!"
                : "Select a category to explore careers"}
            </p>
          </div>

          {/* Step 1: Categories */}
          {!selectedCategory && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-5 border-2 border-slate-100 dark:border-slate-700 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-linear-to-br ${cat.color} flex items-center justify-center text-3xl mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {cat.emoji}
                  </div>

                  <p className="font-bold text-slate-800 dark:text-white text-sm">
                    {cat.label}
                  </p>

                  <p className="text-xs text-slate-400 mt-1">
                    {
                      Object.values(CAREERS).filter(
                        (career) => career.category === cat.id
                      ).length
                    }{" "}
                    careers
                  </p>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Careers */}
          {selectedCategory && (
            <>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery("");
                }}
                className="mb-6 flex items-center gap-2 text-blue-500 hover:text-blue-600 font-semibold transition-colors"
              >
                ← Back to Categories
              </button>

              {(() => {
                const cat = CATEGORIES.find(
                  (category) => category.id === selectedCategory
                );

                if (!cat) return null;

                return (
                  <div
                    className={`bg-linear-to-r ${cat.color} rounded-2xl p-6 mb-6 text-white`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{cat.emoji}</span>

                      <div>
                        <h2 className="text-2xl font-bold">
                          {cat.label}
                        </h2>

                        <p className="text-white/80 text-sm">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Search Careers */}
              <div className="relative mb-6">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  🔍
                </span>

                <input
                  type="text"
                  placeholder="Search careers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
                />
              </div>

              {/* Career Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredCareers.map((career) => (
                  <div
                    key={career.id}
                    className={`bg-white dark:bg-slate-800 rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      selectedCareer === career.title
                        ? "border-green-500 ring-4 ring-green-100 dark:ring-green-900/30"
                        : "border-slate-100 dark:border-slate-700 hover:border-blue-300"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-4xl">
                        {career.emoji}
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-800 dark:text-white">
                          {career.title}
                        </h3>

                        {selectedCareer === career.title && (
                          <span className="text-xs text-green-500 font-bold">
                            ✓ Selected
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
                      {career.description}
                    </p>

                    <div className="flex gap-2 mb-4">
                      <span className="text-xs px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg font-medium">
                        💰 {career.salary}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {career.skills?.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleChooseCareer(career)}
                      disabled={isLoading}
                      className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all ${
                        selectedCareer === career.title
                          ? "bg-green-500 text-white"
                          : "bg-linear-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30"
                      } disabled:opacity-50`}
                    >
                      {isLoading
                        ? "Loading..."
                        : selectedCareer === career.title
                        ? "✓ Selected"
                        : "Choose This Career →"}
                    </button>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {filteredCareers.length === 0 && (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-slate-500">
                    No careers found.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default BrowseCareersPage;
