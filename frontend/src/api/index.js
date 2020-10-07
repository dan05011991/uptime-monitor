import axios from 'axios';

const API_BASE_URL = 'http://localhost:9998/';

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default client;