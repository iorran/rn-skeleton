import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000', // IOS
  baseURL: 'http://10.0.2.2:3000', // ANDROID
});

export default api;
