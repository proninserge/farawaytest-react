import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://swapi.dev/api/",
  headers: {},
});
