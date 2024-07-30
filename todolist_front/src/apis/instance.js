import axios from "axios";


const api = axios.create({
    baseURL: "http://lacalhost:8080/api/v1",
    withCredentials: true
});

export default api; 