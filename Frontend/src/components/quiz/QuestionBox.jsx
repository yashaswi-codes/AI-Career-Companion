const QuestionBox = ({ question, selectedOption, onSelect }) => {
  return (
    <div>
      {/* Question Text */}
      <h2 className="text-xl font-semibold mb-6 text-slate-800 dark:text-white">
        {question.question}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`
              w-full border-2 p-4 rounded-xl text-left font-medium
              transition-all duration-200
              ${selectedOption === option.value
                ? "bg-blue-500 border-blue-500 text-white"
                : "bg-white dark:bg-dark-800 border-slate-200 dark:border-dark-600 text-slate-700 dark:text-slate-200 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-dark-700"
              }
            `}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;