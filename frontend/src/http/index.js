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
export const getProduct = (productId) => api.get(`/products/${productId}`);
export const getCategories = () => api.get('/categories');
export const getUser = (userId) => api.get(`/users/${userId}`);
export const updateUser = (user, userId) => api.put(`/users/${userId}`, user);
export const getAddresses = (userId) => api.get(`/addresses/${userId}`);
export const deleteAddress = (addressId) => api.delete(`/addresses/${addressId}`);
export const addAddress = (address) => api.post('/addresses', address);
export const updateAddress = (address, addressId) => api.put(`/addresses/${addressId}`, address);
export const checkoutSession = (products) => api.post('/create-checkout-session', products);

export default api;