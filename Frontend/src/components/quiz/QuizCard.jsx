const QuizCard = ({ children }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 p-8">
        {children}
      </div>
    </div>
  );
};

export default QuizCard;