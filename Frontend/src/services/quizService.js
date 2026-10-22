import axios from "axios";
const API = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

export const submitQuiz = async (answers) => {
  const response = await axios.post(`${API}/quiz/submit`, { answers });
  return response.data;
};

export const getQuizResult = async (userId) => {
  const response = await axios.get(`${API}/quiz/result/${userId}`);
  return response.data;
};