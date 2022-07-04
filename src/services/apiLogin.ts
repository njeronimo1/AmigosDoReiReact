import axios, { AxiosRequestHeaders } from 'axios';
import { getUserLocalStorage } from '../contexts/AuthProvider/util';

export const apiLogin = axios.create({
    baseURL: 'https://reqres.in/api/',
});


// apiLogin.interceptors.request.use(
//     (config) => {
//         const user = getUserLocalStorage();
//         config.headers.Authorization = user?.token;
//         // config.headers.Authorization = user?.token

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )