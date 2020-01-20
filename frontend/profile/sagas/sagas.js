import {put, takeEvery, call} from 'redux-saga/effects';
import { api } from '../api/api';
import { UPDATE_USER_PREFERENCES, updateUserPreferencesSuccess, fetchUserPreferencesSuccess, FETCH_USER_PREFERENCES, createUserPreference, createPUserPreferenceSuccess, CREATE_USER_PREFERENCE, UPDATE_USER, updateUserSuccess } from '../actions/actions';

export function* updatePreference(action) {
  const reply = yield call(api.updatePreferences, action.data, {token: action.data.token} );
  yield put(updateUserPreferencesSuccess(reply));
}

export function* fetchPreferences(action) {
  const reply = yield call(api.fetchPreferences, action.data);
  yield put(fetchUserPreferencesSuccess(reply.data));
}

export function* createPreference(action) {
  const reply = yield call(api.createUserPreference, action.data);
  yield put(createUserPreferenceSuccess(reply.data));
}

export function* updateUser(action) {
  const reply = yield call(api.updateUser, action.data, {token: action.data.token} );
  yield put(updateUserSuccess(reply));
}

export function* profileSaga() {
  yield takeEvery(UPDATE_USER_PREFERENCES, updatePreference);
  yield takeEvery(FETCH_USER_PREFERENCES, fetchPreferences);
  yield takeEvery(CREATE_USER_PREFERENCE, createPreference);
  yield takeEvery(UPDATE_USER, updateUser);
}