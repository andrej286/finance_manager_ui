import apiService from "../axios";

export const fetchIncomes = async () => {
  const response = await apiService.get('/incomes');
  return response.data;
};

export const createIncome = async (cost) => {
  await apiService.post('/incomes', cost);
};
export const deleteIncome = async (id) => {
  await apiService.delete(`/incomes/${id}`);
};
