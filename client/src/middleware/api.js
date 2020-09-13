import axios from "axios";
import { isDevelopmentEnv } from "util/development";

const BASE_URL = isDevelopmentEnv ? "http://localhost:6969/api/" : "/api/";

axios.interceptors.request.use((request) => {
    return request;
})

export const postRequest = (endpoint, params) =>
    axios.post(`${BASE_URL}${endpoint}`, {
        ...params
    })

export const getRequest = (endpoint, params) => 
    axios.get(`${BASE_URL}${endpoint}`, {
        ...params
    })