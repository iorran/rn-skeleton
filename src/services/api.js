import axios from 'axios';

// baseURL: 'https://vakt-database.herokuapp.com/'
const api = axios.create({
  // baseURL: 'http://localhost:3000', // IOS
  // baseURL: 'https://my-json-server.typicode.com/iorran/db', // ANDROID
  baseURL: 'https://vakt-database.herokuapp.com/', // ANDROID
});

export default api;
