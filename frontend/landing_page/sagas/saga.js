import {put, takeEvery, call} from 'redux-saga/effects';
import { REFRESH_RESTAURANTS, refreshRestaurantsSuccess, CREATE_PENDING_INTEREST, createPendingInterestSuccess, DELETE_PENDING_INTEREST, deletePendingInterestSuccess } from '../actions/actions';
import { api } from '../api/api';

export function* refreshRestaurants(action) {
  const reply = yield call(api.refreshRestaurants, {});
  yield put(refreshRestaurantsSuccess(reply.data.restaurants));
}

export function* generatePendingInterest(action) {
  const reply = yield call(api.createPendingInterest, action.data, action.data.token)
  yield put(createPendingInterestSuccess(reply));
}

export function* removePendingInterest(action) {
  const reply = yield call(api.deletePendingInterest, action.data, action.data.token)
  yield put(deletePendingInterestSuccess(reply));
}

export function* landingPage() {
    yield takeEvery(REFRESH_RESTAURANTS, refreshRestaurants);
    yield takeEvery(CREATE_PENDING_INTEREST, generatePendingInterest);
    yield takeEvery(DELETE_PENDING_INTEREST, removePendingInterest);
  }