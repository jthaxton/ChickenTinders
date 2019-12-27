import { get, post, del } from '../../axios_helpers';

export const api = {
  refreshRestaurants: (data) => {
    return get("api/restaurants", data)
  },
  createPendingInterest: (data, token) => {
    return post("api/pending_interests", data, {token: token})
  },
  deletePendingInterest: (data, token) => {
    return del(`api/pending_interests/${data.id}`, data, {token: token})
  }
};