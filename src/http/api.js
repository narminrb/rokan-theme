import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:1337/api/",
  timeout: 1000,
});

// AxiosInstance.interceptors.request.use((config) => {
//   config.headers["TOKEN_BASE"] = "sadasdasd";
//   return config;
// });

export const getAPiData = async (url, ...config) => {
  return await AxiosInstance.get(url, ...config).then((res) => res?.data);
};