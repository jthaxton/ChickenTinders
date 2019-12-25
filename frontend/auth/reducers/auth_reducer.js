import {REGISTER_USER_SUCCESS, LOGIN_USER_SUCCESS, LOGOUT_USER_SUCCESS} from '../actions/auth_actions';

export const auth = function(prevState = {},  action) {
    switch (action.type) {
    case REGISTER_USER_SUCCESS:
        return {
            ...prevState, user: action.data.data
        }
    case LOGIN_USER_SUCCESS:
        return {
            ...prevState, user: action.data.data
        }
    case LOGOUT_USER_SUCCESS:
        return {
            ...prevState, auth: {
                user: {}
            }
        }
    default:
        return {
            ...prevState
        }
    }
}