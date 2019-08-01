import axios from 'axios';

export const get = (route, data) => {
    return axios.get(route, data)
}

export const post = (route, data) => {
    return axios.post(route, data)
}