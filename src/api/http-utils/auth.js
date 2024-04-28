import axios from "axios";

const API_URL = 'http://localhost:8080'; // Update with your API URL

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  },
});

export const fetchAuthUrl = async () => {
  const response = await apiService.get('/auth/url');
  return response.data;
};
export const fetchAccessToken = async (code) => {
  const response = await apiService.get('/auth/callback?code=' + code);
  return response.data;
};
