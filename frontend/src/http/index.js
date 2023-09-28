import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('accessToken')
    },
});

//list of all the api calls
export const register = (user) => api.post('/register', user);
export const login = (user) => api.post('/login', user);
export const getProducts = () => api.get('/products');
export const getCategories = () => api.get('/categories');

export default api;