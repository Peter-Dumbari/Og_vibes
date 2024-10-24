import axios from "axios";

const BaseURL = process.env.VITE_APP_HOST_URL;

const setBaseurl = (endpoint) => {
  BaseURL + endpoint;
};

const axiosInstance = axios.create({
  baseURL: setBaseurl(""),
  headers: {
    Authorization: localStorage.getItem("authToken") || "",
  },
});

export default axiosInstance;
