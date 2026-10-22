import axios from "axios";

const API = "http://localhost:5000/api";

export const getRoadmap = async (career) => {
  const response = await axios.get(`${API}/roadmap/${career}`);
  return response.data;
};

export const updateMilestone = async (milestoneId, status) => {
  const response = await axios.put(`${API}/roadmap/milestone/${milestoneId}`, { status });
  return response.data;
};