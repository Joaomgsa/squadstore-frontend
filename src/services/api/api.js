import axios from "axios";

const apiURL = "http://localhost:8080/"

const api = axios.create({
    baseURL:apiURL 
})

export default api