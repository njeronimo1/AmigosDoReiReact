import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:4002/'
});

// https://api-amigos-do-rei.herokuapp.com