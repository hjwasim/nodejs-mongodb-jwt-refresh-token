
import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://mern-jwt-auth.herokuapp.com'
});
