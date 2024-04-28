import axios from "axios";

export const fetchAssets = async () => {
  const response = await axios.get('http://localhost:8080/api/assets',{headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
  return response.data;
};

export const createAsset = async (asset) => {
  await axios.post('http://localhost:8080/api/assets', asset, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};

export const deleteAsset = async (id) => {
  await axios.delete(`http://localhost:8080/api/assets/${id}`, {headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Authorization': "Bearer " + localStorage.getItem("accessToken")
    }});
};
