import {put, takeEvery, call} from 'redux-saga/effects';
import { REFRESH_PENDING_INTERESTS, refreshPendingInterests, refreshPendingInterestsSuccess } from "../actions/actions";
import { api } from '../api/api';

export function* _refreshPendingInterests(action) {
  const reply = yield call(api.refreshPendingInterests, {});
  yield put(refreshPendingInterestsSuccess(reply.data.pending_interests));
}

export function* dashboard() {
  yield takeEvery(REFRESH_PENDING_INTERESTS, _refreshPendingInterests);
}