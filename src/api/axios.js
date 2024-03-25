import axios from 'axios';

const API_URL = 'http://localhost:8080/api'; // Update with your API URL

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*',
  },
});

export default apiService