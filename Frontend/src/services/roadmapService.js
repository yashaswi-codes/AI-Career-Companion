import axios from "axios";

const API = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/$/, "");

export const getRoadmap = async (career) => {
  const response = await axios.get(`${API}/roadmap/${career}`);
  return response.data;
};

export const updateMilestone = async (milestoneId, status) => {
  const response = await axios.put(`${API}/roadmap/milestone/${milestoneId}`, { status });
  return response.data;
};