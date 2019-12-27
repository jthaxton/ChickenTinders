import {REFRESH_PENDING_INTERESTS_SUCCESS, } from '../actions/actions';

export const dashboard = function(prevState = {},  action) {
    switch (action.type) {
    case REFRESH_PENDING_INTERESTS_SUCCESS:
        return {
            ...prevState, pendingInterests: action.data
        }
    default:
        return {
            ...prevState
        }
    }
}