/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // ✅ Refresh pe localStorage se load karo
  // ✅ Naya — token expiry check karo
const [user, setUser] = useState(() => {
  try {
    const savedToken = localStorage.getItem("acc_token");
    const savedUser  = localStorage.getItem("acc_user");
    if (!savedToken || !savedUser) return null;

    // JWT expiry check
    const payload = JSON.parse(atob(savedToken.split(".")[1]));
    if (payload.exp * 1000 < Date.now()) {
      localStorage.removeItem("acc_token");
      localStorage.removeItem("acc_user");
      localStorage.removeItem("selectedCareer");
      return null;
    }
    return JSON.parse(savedUser);
    } catch {
    localStorage.removeItem("acc_token");
    localStorage.removeItem("acc_user");
    return null;
  }
});

const [token, setToken] = useState(() => {
  try {
    const savedToken = localStorage.getItem("acc_token");
    if (!savedToken) return null;

    const payload = JSON.parse(atob(savedToken.split(".")[1]));

    if (payload.exp * 1000 < Date.now()) {
      localStorage.removeItem("acc_token");
      localStorage.removeItem("acc_user");
      localStorage.removeItem("selectedCareer");
      return null;
    }

        return savedToken;
      } catch {
        localStorage.removeItem("acc_token");
        localStorage.removeItem("acc_user");
        return null;
      }
    });

  const [isAuthLoading, setIsAuthLoading] = useState(false);

  const login = async (userData, userToken) => {
  setUser(userData);
  setToken(userToken);

  localStorage.setItem("acc_token", userToken);
  localStorage.setItem("acc_user", JSON.stringify(userData));
  };

  // ✅ Naya
const logout = () => {
  setUser(null);
  setToken(null);
  // Saara related data clear karo
  localStorage.removeItem("acc_token");
  localStorage.removeItem("acc_user");
  localStorage.removeItem("acc_quiz_data");
  localStorage.removeItem("selectedCareer");
  // Saare roadmap keys clear karo
  Object.keys(localStorage)
    .filter((k) => k.startsWith("roadmap_"))
    .forEach((k) => localStorage.removeItem(k));
};

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    localStorage.setItem("acc_user", JSON.stringify(updatedUser));
  };

  const value = {
    user,
    token,
    isAuthLoading,
    setIsAuthLoading,
    isAuthenticated: !!token,
    login,
    logout,
    updateUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export default AuthContext;