import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3000', // IOS
  baseURL: 'https://vakt-database.herokuapp.com/', // ANDROID
});

export default api;
