import axios from "axios";

const BaseURL = import.meta.env.VITE_APP_HOST_URL;
const setBaseurl = (endpoint: string): string => {
  return `${BaseURL}${endpoint}`;
};

const axiosInstance = axios.create({
  baseURL: setBaseurl(""),
  headers: {
    Authorization: localStorage.getItem("authToken") || "",
  },
});

export default axiosInstance;
