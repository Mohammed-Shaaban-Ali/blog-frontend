import axios from "axios";

const request = axios.create({
  baseURL: "https://blog-9ft3.onrender.com",
  // baseURL: "http://localhost:8000",
});

export default request;
