import { REFRESH_RESTAURANTS_SUCCESS } from '../actions/actions';

export const landingPage = function(prevState = {}, action) {
  switch(action.type) {
    case REFRESH_RESTAURANTS_SUCCESS:
      return {
        ...prevState, restaurants: action.data.data[0]
      }
      default:
        return {
          ...prevState
        }
  }
}