import { useState } from "react";
import { useAuth }  from "../context/AuthContext";
import { useQuiz }  from "../context/QuizContext";
import { CAREERS }  from "../data/careers";

const ResourcesPage = () => {
  const { user }        = useAuth();
  const { quizResult }  = useQuiz();

  // ✅ Selected career (jo user ne choose kiya tha)
  const myCareer   = user?.targetCareer || quizResult?.topCareers?.[0]?.career || "Software Developer";
  const careerData = CAREERS[myCareer];

  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Career data se resources, youtube, tools sab combine karo
  const allResources = [
    ...(careerData?.resources || []).map((r) => ({
      ...r,
      type: "resource",
      emoji: r.free ? "🆓" : "💳",
    })),
    ...(careerData?.youtube || []).map((channel) => ({
      title: channel,
      type: "youtube",
      emoji: "▶️",
      free: true,
      link: `https://youtube.com/results?search_query=${encodeURIComponent(channel)}`,
    })),
    ...(careerData?.tools || []).map((tool) => ({
      title: tool,
      type: "tool",
      emoji: "🛠️",
      free: true,
      link: `https://www.google.com/search?q=${encodeURIComponent(tool)}`,
    })),
  ];

  const filtered = allResources.filter((r) =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = [
    { id: "resource", label: "Learning Resources", emoji: "📚" },
    { id: "youtube",  label: "YouTube Channels",    emoji: "▶️"  },
    { id: "tool",     label: "Tools",               emoji: "🛠️" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const finalFiltered = activeCategory === "all"
    ? filtered
    : filtered.filter((r) => r.type === activeCategory);

  const getCount = (id) => {
    if (id === "all") return allResources.length;
    return allResources.filter((r) => r.type === id).length;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-8 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            Learning Resources 📚
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Curated resources for{" "}
            <span className="text-blue-500 font-semibold">{myCareer}</span>
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-400 rounded-2xl px-5 py-4 pl-12 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all shadow-sm"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300"
            }`}
          >
            <span>🌟</span>
            <span>All</span>
            <span className={`text-xs px-1.5 py-0.5 rounded-full ${
              activeCategory === "all" ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-500"
            }`}>
              {getCount("all")}
            </span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === cat.id ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-700 text-slate-500"
              }`}>
                {getCount(cat.id)}
              </span>
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        {finalFiltered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {finalFiltered.map((resource, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {resource.emoji}
                  </div>
                  {resource.free ? (
                    <span className="text-xs font-bold px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                      FREE
                    </span>
                  ) : (
                    <span className="text-xs font-bold px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full">
                      PAID
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-slate-800 dark:text-white mb-1 text-lg">
                  {resource.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed capitalize">
                  {resource.type === "youtube" ? "YouTube Channel" :
                   resource.type === "tool"    ? "Tool / Software" :
                   "Learning Resource"}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full font-medium capitalize">
                    {resource.type}
                  </span>
                    <a
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    Visit →
                  </a>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
              No resources found
            </h3>
            <p className="text-slate-500">
              Try a different search term or category.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ResourcesPage;