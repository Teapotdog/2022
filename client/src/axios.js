import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "git ",
  withCredentials: true,
});
