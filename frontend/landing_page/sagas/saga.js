import {put, takeEvery, call} from 'redux-saga/effects';
import { REFRESH_RESTAURANTS, refreshRestaurantsSuccess } from '../actions/actions';
import { api } from '../api/api';

export function* refreshRestaurants(action) {
  const reply = yield call(api.refreshRestaurants, {});
  yield put(refreshRestaurantsSuccess(reply));
}

export function* landingPage() {
    yield takeEvery(REFRESH_RESTAURANTS, refreshRestaurants);
  }