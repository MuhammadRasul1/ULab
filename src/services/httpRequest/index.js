import axios from "axios";

const request = axios.create({ baseURL: import.meta.env.VITE_BASE_URL, });

request.interceptors.request.use(config => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

export default request;
