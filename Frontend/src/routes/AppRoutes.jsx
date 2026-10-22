
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
//import { useQuiz } from "../context/QuizContext";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import QuizPage from "../pages/QuizPage";
import CareerResultPage from "../pages/CareerResultPage";
import DashboardPage from "../pages/DashboardPage";
import RoadmapPage from "../pages/RoadmapPage";
import ResourcesPage from "../pages/ResourcesPage";
import AIToolsPage from "../pages/AIToolsPage";
import PlannerPage from "../pages/PlannerPage";
import MentorsPage from "../pages/MentorsPage";
import ChatbotPage from "../pages/ChatbotPage";
import ProfilePage from "../pages/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage";
import BrowseCareersPage from "../pages/BrowseCareersPage";

// Protected routes

const ProtectedRoute = ({ children }) => {
const { user, isAuthenticated } = useAuth();

  const guestCareer = localStorage.getItem("guestSelectedCareer");
  const isGuestDashboard = !isAuthenticated && !!guestCareer;

  if (!isAuthenticated && !isGuestDashboard) {
    return <Navigate to="/login" replace />;
  }

  if (
    isAuthenticated &&
    !user?.hasCompletedQuiz &&
    !user?.targetCareer
  ) {
    return <Navigate to="/quiz" replace />;
  }

  return children;
};

// Quiz route
const QuizRoute = ({ children }) => {
  const { user, isAuthenticated } = useAuth();

  // Logged in + career chosen → dashboard
  if (isAuthenticated && (user?.hasCompletedQuiz || user?.targetCareer)) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/browse-careers" element={<BrowseCareersPage />} />
      </Route>

      {/* Quiz */}
      <Route
        path="/quiz"
        element={
          <QuizRoute>
            <QuizPage />
          </QuizRoute>
        }
      />

      <Route path="/career-result" element={<CareerResultPage />} />

      {/* Protected dashboard routes */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/roadmap" element={<RoadmapPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/ai-tools" element={<AIToolsPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
