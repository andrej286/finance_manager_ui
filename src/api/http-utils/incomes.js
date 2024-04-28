import axios from "axios";

export const fetchIncomes = async () => {
  const response = await axios.get('http://localhost:8080/api/incomes', {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
  return response.data;
};

export const createIncome = async (cost) => {
  await axios.post('http://localhost:8080/api/incomes', cost, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};

export const deleteIncome = async (id) => {
  await axios.delete(`http://localhost:8080/api/incomes/${id}`, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};
