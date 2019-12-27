import { get, del } from '../../axios_helpers';

export const api = {
  refreshPendingInterests: (data) => {
    return get("api/pending_interests", data)
  },
  deletePendingInterest: (data, token) => {
    return del(`api/pending_interests/${data.id}`, data, {token: token})
  }
};