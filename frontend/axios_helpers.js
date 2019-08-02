import axios from 'axios';

export const get = (route, data) => {
    return axios.get(route, data)
}

export const post = (route, data, token) => {
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    return axios.post(route, data, {headers: {'X-CSRF-Token': token, 'X-Requested-With': 'XMLHttpRequest',
}})
}