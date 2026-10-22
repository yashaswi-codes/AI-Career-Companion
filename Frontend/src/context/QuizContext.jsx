/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

  const [stage,            setStage]            = useState(1);
  const [categoryAnswers,  setCategoryAnswers]  = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [topCategories,    setTopCategories]    = useState([]);

  const [careerAnswers,    setCareerAnswers]    = useState({});
  const [quizResult,       setQuizResult]       = useState(null);
  const [isSubmitted,      setIsSubmitted]      = useState(false);

  // ✅ Naya — User ne jo career choose ki
  const [selectedCareer,   setSelectedCareer]   = useState(null);

  const saveCategoryAnswer = (questionId, selectedIndex) => {
    setCategoryAnswers((prev) => ({ ...prev, [questionId]: selectedIndex }));
  };

  const completeStage1 = (category, topCats) => {
    setSelectedCategory(category);
    setTopCategories(topCats);
    setStage(2);
  };

  const saveCareerAnswer = (questionId, selectedIndex) => {
    setCareerAnswers((prev) => ({ ...prev, [questionId]: selectedIndex }));
  };

  // ✅ Naya — Career choose karne ka function
  const chooseCareer = (career) => {
    setSelectedCareer(career);
  };

  const resetQuiz = () => {
    setStage(1);
    setCategoryAnswers({});
    setSelectedCategory(null);
    setTopCategories([]);
    setCareerAnswers({});
    setQuizResult(null);
    setIsSubmitted(false);
    setSelectedCareer(null);
  };

  const value = {
    stage, setStage,
    categoryAnswers, saveCategoryAnswer,
    selectedCategory, topCategories, completeStage1,
    careerAnswers, saveCareerAnswer,
    quizResult, setQuizResult,
    isSubmitted, setIsSubmitted,
    selectedCareer, chooseCareer, setSelectedCareer,  // ✅ Naya
    resetQuiz,
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used within QuizProvider");
  return context;
};

export default QuizContext;