import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api-amigos-do-rei.herokuapp.com'
});

// https://api-amigos-do-rei.herokuapp.com