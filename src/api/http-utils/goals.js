import apiService from "../axios";

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
