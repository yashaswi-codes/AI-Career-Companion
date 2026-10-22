const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  const percentage = Math.round(((currentQuestion + 1) / totalQuestions) * 100);

  // Section determine karo
  const getSection = () => {
    const q = currentQuestion + 1;
    if (q <= 5)  return "Personality";
    if (q <= 12) return "Interests";
    if (q <= 16) return "Learning Style";
    return "Goals";
  };

  return (
    <div className="mb-8">

      {/* Top Row — Question count + Section */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-blue-500">
            Question {currentQuestion + 1}
          </span>
          <span className="text-sm text-slate-400">of {totalQuestions}</span>
        </div>
        <span className="text-xs font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full">
          {getSection()}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
        <div
          className="bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="flex justify-end mt-1">
        <span className="text-xs text-slate-400">{percentage}% complete</span>
      </div>

    </div>
  );
};

export default ProgressBar;