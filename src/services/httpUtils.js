import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Update with your API URL

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  },
});

export const fetchGoals = async () => {
  const response = await apiService.get('/goals');
  return response.data;
};

export const createGoal = async (goal) => {
  await apiService.post('/goals', goal);
};

export const deleteGoal = async (id) => {
  await apiService.delete(`/goals/${id}`);
};

export default apiService;
