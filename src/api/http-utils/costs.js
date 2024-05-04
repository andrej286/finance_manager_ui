import axios from "axios";

export const fetchCosts = async () => {
  const response = await axios.get('http://localhost:8080/api/costs', {headers: {
    'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken"),
  }});
  return response.data;
};

export const createCost = async (cost) => {
  await axios.post('http://localhost:8080/api/costs', cost, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};

export const deleteCost = async (id) => {
  await axios.delete(`http://localhost:8080/api/costs/${id}`, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};

export const updateCost = async (id, updatedCost) => {
  await axios.put(`http://localhost:8080/api/costs/${id}`, updatedCost, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};