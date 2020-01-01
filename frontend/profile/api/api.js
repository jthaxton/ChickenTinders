import {get, post, del, patch} from '../../axios_helpers';

export const api = {
  updatePreferences: (data, token) => {
    return patch(`/api/preferences/${data.preferenceId}`, data, token)
    },
  updateUser: (data, token) => {
    return post(`/api/users/${data.id}`, data, token)
  },
  fetchPreferences: (data) => {
    return get(`/api/preferences`, {})
  },
  createUserPreference: (data, token) => {
    return post(`/api/preferences`, data, {token: data.token})
  }
}