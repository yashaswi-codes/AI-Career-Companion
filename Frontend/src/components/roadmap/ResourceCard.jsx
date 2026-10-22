const ResourceCard = ({ resource }) => {
  const categoryColors = {
    youtube:  "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    courses:  "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    docs:     "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    practice: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    books:    "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400",
  };

  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      {/* Top Row */}
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
          {resource.emoji}
        </div>
        <div className="flex items-center gap-2">
          {resource.free ? (
            <span className="text-xs font-bold px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
              FREE
            </span>
          ) : (
            <span className="text-xs font-bold px-2 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full">
              PAID
            </span>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="font-bold text-slate-800 dark:text-white mb-1">
        {resource.title}
      </h3>
      <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">
        {resource.description}
      </p>

      {/* Bottom Row */}
      <div className="flex items-center justify-between">
        <span className={`text-xs px-2.5 py-1 rounded-full font-medium capitalize ${
          categoryColors[resource.category] || categoryColors.courses
        }`}>
          {resource.category}
        </span>
        <span className="text-xs text-slate-400">
          ⭐ {resource.rating}
        </span>
      </div>

    </div>
  );
};

export default ResourceCard;