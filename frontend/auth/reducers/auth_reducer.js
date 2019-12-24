import {REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS} from '../actions/auth_actions';

export const auth = function(prevState = {},  action) {
    switch (action.type) {
    case REGISTER_USER_SUCCESS:
        return {
            ...prevState, action
        }
    case LOGIN_USER_SUCCESS:
        return {
            ...prevState, action
        }
    default:
        return {
            ...prevState
        }
    }
}