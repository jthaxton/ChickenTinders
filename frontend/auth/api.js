import {post} from '../axios_helpers';

export const api = {
    register: (data, token) => {
        return post(`/api/users`, data, token)
    }
}