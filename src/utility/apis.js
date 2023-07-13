import axios from 'axios';
// import axiosAdapter from 'axios/lib/adapters/xhr';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Set your API base URL here
  headers: {
    'Content-Type': 'application/json',
  },
//   adapter: axiosAdapter
});

// Add request interceptor
api.interceptors.request.use(
  config => {
    // You can modify the request config here, such as adding headers or authentication tokens
    // config.headers['Authorization'] = 'Bearer ' + token;
    return config;
  },
  error => {
    // Handle request errors
    // return Promise.reject(error);
  }
);

// Add response interceptor
api.interceptors.response.use(
  response => {
    // You can modify the response data here before it's returned
    return response;
  },
  error => {
    // Handle response errors
    // return Promise.reject(error);
  }
);

export default api;
