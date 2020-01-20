import { UPDATE_USER_SUCCESS, UPDATE_USER_PREFERENCES_SUCCESS, FETCH_USER_PREFERENCES_SUCCESS, CREATE_USER_PREFERENCE_SUCCESS } from '../actions/actions';
import { CREATE_PENDING_INTEREST_SUCCESS } from '../../landing_page/actions/actions';

export const profile = function(prevState = {},  action) {
    switch (action.type) {
    case UPDATE_USER_SUCCESS:
        return {
            ...prevState, user: action.data.data.user
        }
    case UPDATE_USER_PREFERENCES_SUCCESS:
        return {
            ...prevState, userPreferences: action.data.data.preferences
        }
    case FETCH_USER_PREFERENCES_SUCCESS:
      return {
        ...prevState, userPreferences: action.data.preferences, user: action.data.user
      }
      case CREATE_USER_PREFERENCE_SUCCESS:
        return {
          ...prevState, userPreferences: action.data.preferences
        }
    default:
        return {
            ...prevState
        }
    }
}