import  {routes}  from "./routes";
import {post} from '../axios_helpers';

export const api = {
    register: (data) => {
        return post(`0.0.0.0:5000/api/users`, data)
    }
}