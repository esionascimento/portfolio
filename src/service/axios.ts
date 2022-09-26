import axios from 'axios';

const HOST_GITHUB = 'https://api.github.com/users/esionascimento';

const axiosInstance = axios.create({
  baseURL: HOST_GITHUB,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response || error)
);

export default axiosInstance;
