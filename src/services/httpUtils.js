import axios from 'axios';

const API_URL = 'http://localhost:8080/api/goals';

export const fetchGoals = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createGoal = async (goal) => {
  await axios.post(API_URL, goal);
};

export const deleteGoal = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};