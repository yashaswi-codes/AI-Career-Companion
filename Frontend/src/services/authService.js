import axios from "axios";

const API = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

// ── Axios Instance ────────────────────────────────────────
const apiClient = axios.create({
  baseURL: API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// ── Request Interceptor ───────────────────────────────────
// Har request mein JWT token automatically add karo

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("acc_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


// ── Response Interceptor ──────────────────────────────────
// 401 aaye toh logout karo
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("acc_token");
      localStorage.removeItem("acc_user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// ── Auth Service ──────────────────────────────────────────
export const authService = {

  // Register
  register: async (userData) => {
    const response = await apiClient.post("/auth/register", userData);
    return response.data; // { token, user }
  },

  // Login
  login: async (credentials) => {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data; // { token, user }
  },

  // Logout
  logout: async () => {
    const response = await apiClient.post("/auth/logout");
    return response.data;
  },

  // Get Current User
  getMe: async () => {
    const response = await apiClient.get("/auth/me");
    return response.data.user;
  },

  // Update Profile
  updateProfile: async (updates) => {
    const response = await apiClient.put("/auth/profile", updates);
    return response.data.user;
  },

  // Change Password
  changePassword: async (passwords) => {
    const response = await apiClient.put("/auth/password", passwords);
    return response.data;
  },
};

export { apiClient };
export default authService;