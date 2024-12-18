import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://byd-dvaeh0d5bwh7g5a0.australiaeast-01.azurewebsites.net ",
  withCredentials: true,
});
