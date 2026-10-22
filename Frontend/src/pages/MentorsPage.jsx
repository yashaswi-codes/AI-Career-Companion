import { useAuth } from "../context/AuthContext";
import { useQuiz } from "../context/QuizContext";
import { CAREERS } from "../data/careers";

const MentorsPage = () => {
  const { user }       = useAuth();
  const { quizResult } = useQuiz();

  const myCareer   = user?.targetCareer || quizResult?.topCareers?.[0]?.career || "Software Developer";
  const careerData = CAREERS[myCareer];

  const mentors = careerData?.mentors || [];

  // ✅ Mentor avatars (initials based)
  const getMentorInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const colors = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-green-500 to-emerald-500",
    "from-amber-500 to-yellow-500",
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Mentors & Inspirations 👥
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Industry leaders to follow for{" "}
            <span className="text-blue-500 font-semibold">{myCareer}</span>
          </p>
        </div>

        {/* Mentors Grid */}
        {mentors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mentors.map((mentor, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className={`w-20 h-20 rounded-3xl bg-linear-to-br ${colors[index % colors.length]} flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {getMentorInitials(mentor)}
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-1">
                  {mentor}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Expert in {myCareer}
                </p>
                <a
                  href={`https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(mentor)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors"
                >
                  Find on LinkedIn →
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">👥</div>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
              No mentors listed yet
            </h3>
            <p className="text-slate-500">
              Check back soon — we're adding more mentors for {myCareer}!
            </p>
          </div>
        )}

        {/* Bonus — Connect with Real Mentors */}
        <div className="mt-10 bg-linear-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-8 translate-x-8" />
          <div className="relative z-10">
            <div className="text-4xl mb-3">💼</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Want 1-on-1 Mentorship?
            </h2>
            <p className="text-blue-100 mb-6 max-w-md mx-auto">
              Connect with real industry professionals for personalized career guidance.
            </p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Find Mentors on LinkedIn →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MentorsPage;