import axios from "axios";

const apiClient = (params?: any) =>
  axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    params: { ...params },
  });

export default apiClient;
