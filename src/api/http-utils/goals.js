import axios from "axios";

export const fetchGoals = async () => {
  const response = await axios.get('http://localhost:8080/api/goals', {headers: {
    'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
  }});
  return response.data;
};

export const createGoal = async (goal) => {
  await axios.post('http://localhost:8080/api/goals', goal, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};

export const deleteGoal = async (id) => {
  await axios.delete(`http://localhost:8080/api/goals/${id}`, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};
