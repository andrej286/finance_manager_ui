import axios from "axios";
import apiService from "../axios";


export const fetchIncomes = async (token) => {
  const response = await axios.get('http://localhost:8080/api/incomes', {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + token
    }});
  return response.data;
};

export const createIncome = async (cost) => {
  await apiService.post('/incomes', cost);
};
export const deleteIncome = async (id) => {
  await apiService.delete(`/incomes/${id}`);
};
