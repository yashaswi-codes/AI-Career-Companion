import axios from "axios";

const API = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

export const sendMessage = async (message, history) => {
  const response = await axios.post(`${API}/chatbot/message`, {
    message,
    history,
  });
  return response.data;
};

export const getChatHistory = async (userId) => {
  const response = await axios.get(`${API}/chatbot/history/${userId}`);
  return response.data;
};

export const clearHistory = async (userId) => {
  const response = await axios.delete(`${API}/chatbot/history/${userId}`);
  return response.data;
};