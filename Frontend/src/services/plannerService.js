import axios from "axios";

const API = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

export const getTasks = async (userId) => {
  const response = await axios.get(`${API}/planner/${userId}`);
  return response.data;
};

export const addTask = async (task) => {
  const response = await axios.post(`${API}/planner/task`, task);
  return response.data;
};

export const updateTask = async (taskId, updates) => {
  const response = await axios.put(`${API}/planner/task/${taskId}`, updates);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API}/planner/task/${taskId}`);
  return response.data;
};