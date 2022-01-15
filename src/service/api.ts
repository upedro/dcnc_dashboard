import axios, { AxiosRequestConfig } from "axios";
import { getTokenLocalStorage } from "../auth/utils";

export const api = axios.create({
    baseURL: 'https://dcnc.herokuapp.com/api/',
    timeout: 60000,
    headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
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