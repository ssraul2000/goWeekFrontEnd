import axios from "axios";

const api = axios.create({
  baseURL: "https://backendgoweek6.herokuapp.com"
});

// axios.interceptors.request(config => {});
// axios.interceotors.response(config => {});
export default api;
