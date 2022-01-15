import axios, { AxiosRequestConfig } from "axios";
import { getTokenLocalStorage } from "../auth/utils";

export const api = axios.create({
    baseURL: 'http://localhost:5000/api/',
    timeout: 60000,
    headers: { 
        'Content-Type': 'application/json',
        'Accept':'*/*',
        'Access-Control-Allow-Methods': ' GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token' }
})



api.interceptors.request.use(
    (config:AxiosRequestConfig) => {
        const token = getTokenLocalStorage();
        config.headers = {Authorization : token as string}
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)