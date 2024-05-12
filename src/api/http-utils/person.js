import axios from "axios";

export const fetchPersonInfo = async () => {
  const response = await axios.get('http://localhost:8080/api/person/info', {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
  return response.data;
};