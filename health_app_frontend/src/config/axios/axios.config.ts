import { store } from '@redux/store';
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: {
        serialize: (params: any) => {
            return queryString.stringify(params, { arrayFormat: 'bracket' });
        }
    }
});
axiosClient.interceptors.request.use(async (config) => {
    console.log(store.getState().user.token);
    config.headers.Authorization = 'Bearer ' + store.getState().user.token;
    return config;
});
axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);
export default axiosClient;
