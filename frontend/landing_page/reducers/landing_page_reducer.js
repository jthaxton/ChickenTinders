import { REFRESH_RESTAURANTS_SUCCESS, CREATE_PENDING_INTEREST_SUCCESS, DELETE_PENDING_INTEREST_SUCCESS } from '../actions/actions';

export const landingPage = function(prevState = {}, action) {
  switch(action.type) {
    case REFRESH_RESTAURANTS_SUCCESS:
      return {
        ...prevState, restaurants: action.data
      }
    case CREATE_PENDING_INTEREST_SUCCESS:
      return {
        ...prevState, restaurants: action.data.data.restaurants
      }
    case DELETE_PENDING_INTEREST_SUCCESS:
      return {
        ...prevState, restaurants: action.data.data.restaurants
      }
      default:
        return {
          ...prevState
        }
  }
}