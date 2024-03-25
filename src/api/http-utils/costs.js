import apiService from "../axios";

export const fetchCosts = async () => {
  const response = await apiService.get('/costs');
  return response.data;
};

export const createCost = async (cost) => {
  await apiService.post('/costs', cost);
};

export const deleteCost = async (id) => {
  await apiService.delete(`/costs/${id}`);
};
