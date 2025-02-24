import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/';


const client = axios.create({
  baseURL: baseUrl,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  withCredentials: true,
});


client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default client;
