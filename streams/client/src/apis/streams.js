import axios from 'axios';

export const axiosStream = axios.create({
    baseURL: 'http://localhost:3001'
})