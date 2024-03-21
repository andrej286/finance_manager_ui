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

export const fetchCosts = async () => {
  const response = await apiService.get('/costs');
  return response.data;
};

export const fetchIncomes = async () => {
  const response = await apiService.get('/incomes');
  return response.data;
};

export const createGoal = async (goal) => {
  await apiService.post('/goals', goal);
};

export const createCost = async (cost) => {
  await apiService.post('/costs', cost);
};

export const createIncome = async (cost) => {
  await apiService.post('/incomes', cost);
};

export const deleteGoal = async (id) => {
  await apiService.delete(`/goals/${id}`);
};

export const deleteCost = async (id) => {
  await apiService.delete(`/costs/${id}`);
};

export const deleteIncome = async (id) => {
  await apiService.delete(`/incomes/${id}`);
};

export default apiService;
