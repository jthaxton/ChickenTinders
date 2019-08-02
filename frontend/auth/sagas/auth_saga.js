import {put, takeEvery, call} from 'redux-saga/effects';
import {REGISTER_USER, registerUserSuccess} from '../actions/auth_actions';
import { api } from '../api';

export function* registerUser(action) {
    console.log(action);

    const reply = yield call(api.register,  action.data, action.data.token)
    
    yield put(registerUserSuccess(reply))
}

export function* auth() {
    yield takeEvery(REGISTER_USER, registerUser)
  }