import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { useAuth } from "../context/AuthContext";
import { apiClient } from "../services/authService";

import {
  CATEGORY_QUIZ,
  calculateCategoryScores,
  getTopCategories,
} from "../data/categoryQuiz";

import {
  CAREER_QUIZ,
  calculateCareerScores,
  getTop5Careers,
} from "../data/careerQuiz";

import { CATEGORIES } from "../data/categories";

const QuizPage = () => {
  const navigate = useNavigate();
  const { user, updateUser, isAuthenticated } = useAuth();

  const {
    stage,
    categoryAnswers,
    saveCategoryAnswer,
    completeStage1,
    careerAnswers,
    saveCareerAnswer,
    selectedCategory,
    setQuizResult,
    setIsSubmitted,
  } = useQuiz();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption,  setSelectedOption]  = useState(null);
  const [isSubmitting,    setIsSubmitting]    = useState(false);

  // ── Current Questions Based on Stage ─────────────────────
  const questions = stage === 1
    ? CATEGORY_QUIZ
    : (CAREER_QUIZ[selectedCategory] || []);

  const totalQuestions = questions.length;
  const progress       = Math.round(((currentQuestion + 1) / totalQuestions) * 100);

  // ── Category Info ─────────────────────────────────────────
  const categoryInfo = CATEGORIES.find((c) => c.id === selectedCategory);

  // ── Handle Next ───────────────────────────────────────────
  const handleNext = async () => {
    if (selectedOption === null) return;

    const currentQ = questions[currentQuestion];

    // ── Stage 1 ───────────────────────────────────────────
    if (stage === 1) {
      saveCategoryAnswer(currentQ.id, selectedOption);

      if (currentQuestion === totalQuestions - 1) {
        // Calculate category scores
        const updatedAnswers = {
          ...categoryAnswers,
          [currentQ.id]: selectedOption,
        };

        const scores      = calculateCategoryScores(updatedAnswers);
        const topCats     = getTopCategories(scores, 3);
        const bestCategory = topCats[0]?.category;

        completeStage1(bestCategory, topCats);
        setCurrentQuestion(0);
        setSelectedOption(null);
        return;
      }
    }

    // ── Stage 2 ───────────────────────────────────────────
    if (stage === 2) {
      saveCareerAnswer(currentQ.id, selectedOption);

      if (currentQuestion === totalQuestions - 1) {
        // Calculate career scores
        const updatedAnswers = {
          ...careerAnswers,
          [currentQ.id]: selectedOption,
        };

        const scores     = calculateCareerScores(updatedAnswers, selectedCategory);
        const top5       = getTop5Careers(scores);

        const result = {
          topCareers:       top5,
          selectedCategory,
          categoryAnswers,
          careerAnswers:    updatedAnswers,
          scores,
        };

        setQuizResult(result);
        setIsSubmitted(true);

        // ── Backend Submit ─────────────────────────────
        if (isAuthenticated) {
          setIsSubmitting(true);
          try {
            await apiClient.post("/quiz/submit", {
              categoryAnswers,
              careerAnswers: updatedAnswers,
              selectedCategory,
            });
            if (user) {
              updateUser({
                ...user,
                hasCompletedQuiz: true,
                targetCareer: top5[0]?.career || "",
              });
            }
          } catch (err) {
            console.error("Quiz submit failed:", err);
          } finally {
            setIsSubmitting(false);
          }
        }

        navigate("/career-result");
        return;
      }
    }

    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  };

  // ── Handle Back ───────────────────────────────────────────
  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center px-4 py-10">

      {/* Back to Previous Page */}
      <div className="w-full max-w-2xl mb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-blue-500 font-medium text-sm transition-colors"
        >
          ← Go Back
        </button>
      </div>
      
      {/* Stage Badge */}
      <div className="mb-6 flex items-center gap-3">
        <div className={`px-4 py-1.5 rounded-full text-sm font-bold ${
          stage === 1
            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            : "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
        }`}>
          {stage === 1 ? "Stage 1: Find Your Category" : `Stage 2: ${categoryInfo?.label || "Career"} Quiz`}
        </div>

        {stage === 2 && categoryInfo && (
          <div className="text-2xl">{categoryInfo.emoji}</div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
          <span>Question {currentQuestion + 1} of {totalQuestions}</span>
          <span>{progress}% Complete</span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div
            className={`h-2.5 rounded-full transition-all duration-500 ${
              stage === 1
                ? "bg-linear-to-r from-blue-500 to-cyan-500"
                : "bg-linear-to-r from-purple-500 to-pink-500"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Stage Indicators */}
        <div className="flex items-center gap-2 mt-3">
          <div className={`flex items-center gap-1.5 text-xs font-medium ${
            stage === 1
              ? "text-blue-500"
              : "text-green-500"
          }`}>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-xs ${
              stage === 1 ? "bg-blue-500" : "bg-green-500"
            }`}>
              {stage === 1 ? "1" : "✓"}
            </div>
            Category Quiz
          </div>
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-600" />
          <div className={`flex items-center gap-1.5 text-xs font-medium ${
            stage === 2 ? "text-purple-500" : "text-slate-400"
          }`}>
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-xs ${
              stage === 2 ? "bg-purple-500" : "bg-slate-300 dark:bg-slate-600"
            }`}>
              2
            </div>
            Career Quiz
          </div>
        </div>
      </div>

      {/* Quiz Card */}
      <div className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 p-8">

        {/* Question */}
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-8 leading-relaxed">
          {questions[currentQuestion]?.question}
        </h2>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {questions[currentQuestion]?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedOption(index)}
              className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-all duration-200 font-medium ${
                selectedOption === index
                  ? stage === 1
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 shadow-lg shadow-blue-500/20"
                    : "border-purple-500 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 shadow-lg shadow-purple-500/20"
                  : "border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 ${
                  selectedOption === index
                    ? stage === 1
                      ? "border-blue-500 bg-blue-500 text-white"
                      : "border-purple-500 bg-purple-500 text-white"
                    : "border-slate-300 dark:border-slate-500 text-slate-400"
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                <span>{option.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {currentQuestion > 0 && (
            <button
              onClick={handleBack}
              className="px-6 py-3 border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
            >
              ← Back
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={selectedOption === null || isSubmitting}
            className={`flex-1 py-3 rounded-xl font-bold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
              stage === 1
                ? "bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:shadow-blue-500/30"
                : "bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:shadow-purple-500/30"
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : currentQuestion === totalQuestions - 1 ? (
              stage === 1
                ? "Find My Category 🎯"
                : "Get My Results 🚀"
            ) : (
              "Next →"
            )}
          </button>
        </div>

      </div>

      {/* Footer Note */}
      <p className="mt-6 text-sm text-slate-400 dark:text-slate-500 text-center">
        {stage === 1
          ? "Answer honestly — there are no right or wrong answers!"
          : `You're in the ${categoryInfo?.label} category — finding your best career!`}
      </p>

    </div>
  );
};

export default QuizPage;