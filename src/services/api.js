import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000', // IOS
  baseURL: 'https://swapi.co/api', // ANDROID
});

export default api;
