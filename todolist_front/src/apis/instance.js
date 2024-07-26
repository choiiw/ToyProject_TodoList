const { default: axios } = require("axios");

const api = axios.create({
    baseURL: "http://lacalhost:8080/api/v1"
});

export default api; 