const DashboardCard = ({
  title,
  value,
  subtitle,
  emoji,
  color = "from-blue-500 to-purple-600",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${onClick ? "cursor-pointer" : ""}`}
    >
      <div className={`w-12 h-12 bg-linear-to-br ${color} rounded-xl flex items-center justify-center text-xl mb-3 shadow-md`}>
        {emoji}
      </div>
      <p className="text-2xl font-bold text-slate-900 dark:text-white">
        {value}
      </p>
      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
        {title}
      </p>
      {subtitle && (
        <p className="text-xs text-slate-400 mt-1">{subtitle}</p>
      )}
    </div>
  );
};

export default DashboardCard;