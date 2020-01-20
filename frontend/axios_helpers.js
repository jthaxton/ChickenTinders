import axios from 'axios';


export const get = (route, data) => {
    return axios.get(route, data)
}

export const post = (route, data, token) => {
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    const tk = token && token.token;
    return axios.post(route,
         data, 
            {
             headers: {
                'X-CSRF-Token': tk,
                 'X-Requested-With': 'XMLHttpRequest',
                  'Content-Type': 'application/json'
                }
            }
            )
}

export const patch = (route, data, token) => {
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    const tk = token && token.token;
    return axios.patch(route,
         data, 
            {
             headers: {
                'X-CSRF-Token': tk,
                 'X-Requested-With': 'XMLHttpRequest',
                  'Content-Type': 'application/json'
                }
            }
            )
}

export const del = (route, data, token) => {
    axios.defaults.xsrfCookieName = 'csrftoken'
    axios.defaults.xsrfHeaderName = 'X-CSRFToken'
    const tk = token && token.token;
    return axios.delete(
        route,
        {headers: {
            'X-CSRF-Token': tk,
             'X-Requested-With': 'XMLHttpRequest',
              'Content-Type': 'application/json'
            }},
        data
      );
}