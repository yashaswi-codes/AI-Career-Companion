import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { QuizProvider, useQuiz } from "./context/QuizContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { apiClient } from "./services/authService";
import AppRoutes from "./routes/AppRoutes";

const AppContent = () => {
  const { isAuthenticated, user } = useAuth();
  const { setQuizResult, quizResult, resetQuiz } = useQuiz();

  // ✅ Yeh add karo existing useEffect ke baad
    useEffect(() => {
      if (!isAuthenticated) {
        resetQuiz();
        // selectedCareer bhi clear karo
        localStorage.removeItem("selectedCareer");
      }
    }, [isAuthenticated]); // eslint-disable-line react-hooks/exhaustive-deps


  useEffect(() => {
    const fetchQuizResult = async () => {
      if (isAuthenticated && user?.hasCompletedQuiz && !quizResult) {
        try {
          const res = await apiClient.get("/quiz/result");
          const { topCareers, selectedCategory, scores } = res.data.data;

          setQuizResult({
            topCareers,
            selectedCategory,
            scores,
          });
        } catch (err) {
          console.error("Failed to fetch quiz result:", err);
        }
      }
    };

    fetchQuizResult();
  }, [isAuthenticated, user, quizResult, setQuizResult]);

  return <AppRoutes />;
};

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <QuizProvider>
            <AppContent />
          </QuizProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
