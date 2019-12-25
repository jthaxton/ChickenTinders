import {post, del} from '../axios_helpers';

export const api = {
    register: (data, token) => {
        return post(`/api/users`, data, token.token)
    },
    login: (data, token) => {
        return post(`/api/sessions`, data, token)
    },
    logout: (data, token) => {
        return del(`/api/sessions/${data.id}`, data, token)
    },
}