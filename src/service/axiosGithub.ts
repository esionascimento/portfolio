import axios from 'axios';

const HOST_GITHUB = 'https://api.github.com/users/esionascimento';

const axiosInstanceGithub = axios.create({
  baseURL: HOST_GITHUB,
});

axiosInstanceGithub.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response || error)
);

export default axiosInstanceGithub;
