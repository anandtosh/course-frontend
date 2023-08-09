import axios from 'axios';
import { toast } from 'react-toastify';
import { authStore } from '../stores/useAuthStore';
// import axiosAdapter from 'axios/lib/adapters/xhr';
let token = localStorage.getItem('fols_auth') ? (JSON.parse(localStorage.getItem('fols_auth')))?.state?.token : null
const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL, // Set your API base URL here
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
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
    if(error?.response?.status?.toString().startsWith("4")){
      toast.error(error.response.data.error)
    }else if(error?.response?.status?.toString().startsWith("5")){
      toast.error(error?.response?.data?.error || 'Something went wrong, Please try again later.')
    }
    // Handle response errors
    // return Promise.reject(error);
  }
);

export default api;
