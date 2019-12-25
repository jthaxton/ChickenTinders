import { get } from '../../axios_helpers';

export const api = {
  refreshRestaurants: (data) => {
    return get("api/restaurants", data)
  }
};