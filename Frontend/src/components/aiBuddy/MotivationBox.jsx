import { useState } from "react";

const MotivationBox = () => {
  const quotes = [
    { text: "The secret of getting ahead is getting started.",              author: "Mark Twain"        },
    { text: "It always seems impossible until it's done.",                  author: "Nelson Mandela"    },
    { text: "Don't watch the clock; do what it does. Keep going.",          author: "Sam Levenson"      },
    { text: "The expert in anything was once a beginner.",                  author: "Helen Hayes"       },
    { text: "Success is the sum of small efforts repeated day in day out.", author: "Robert Collier"    },
    { text: "Code is like humor. When you have to explain it, it's bad.",   author: "Cory House"       },
    { text: "First, solve the problem. Then, write the code.",              author: "John Johnson"      },
    { text: "Learning never exhausts the mind.",                            author: "Leonardo da Vinci" },
  ];

  // ✅ 0 se start — no Math.random() during render
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Math.random() event handler mein — allowed
  const nextQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(randomIndex);
  };

  const quote = quotes[currentIndex];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">💡</span>
          <h3 className="font-bold text-slate-900 dark:text-white">
            Daily Motivation
          </h3>
        </div>
        <button
          onClick={nextQuote}
          className="w-8 h-8 flex items-center justify-center bg-slate-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-200 text-slate-500 hover:text-blue-500"
        >
          🔄
        </button>
      </div>

      {/* Quote */}
      <div className="bg-linear-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800/50">
        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed italic mb-3">
          {`"${quote.text}"`}
        </p>
        <p className="text-blue-500 dark:text-blue-400 text-xs font-semibold text-right">
          — {quote.author}
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-blue-500 w-4"
                : "w-1.5 bg-slate-300 dark:bg-slate-600"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default MotivationBox;