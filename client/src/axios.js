import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://byd-dvaeh0d5bwh7g5a0.australiaeast-01.azurewebsites.net/routes",
  withCredentials: true,
});
fetch("http://byd-dvaeh0d5bwh7g5a0.australiaeast-01.azurewebsites.net/routes", {
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

  makeRequest.get("http://byd-dvaeh0d5bwh7g5a0.australiaeast-01.azurewebsites.net/routes")
  .then((response) => {
    console.log("User data:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching users:", error);
  });

