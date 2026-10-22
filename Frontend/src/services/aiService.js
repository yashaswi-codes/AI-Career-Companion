import axios from "axios";

const API = "http://localhost:5000/api";

export const getCareerRecommendation = async (answers) => {
  const response = await axios.post(`${API}/ai/career-recommendation`, { answers });
  return response.data;
};

export const getMotivation = async (career, progress) => {
  const response = await axios.post(`${API}/ai/motivation`, { career, progress });
  return response.data;
};

export const getResources = async (career, learningStyle) => {
  const response = await axios.post(`${API}/ai/resources`, { career, learningStyle });
  return response.data;
};