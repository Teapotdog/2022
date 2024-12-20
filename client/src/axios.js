import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true,
});
fetch("https://byd-dvaeh0d5bwh7g5a0.australiaeast-01.azurewebsites.net", {
  method: "GET",
  credentials: "include", // 允许发送 Cookies
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
