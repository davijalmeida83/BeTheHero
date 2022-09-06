import axios from 'axios';

const api = axios.create({
  baseURL:'https://bethehero-backend-brasil.herokuapp.com'
})

export default api;
