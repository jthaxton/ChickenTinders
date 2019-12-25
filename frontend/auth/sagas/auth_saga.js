import {put, takeEvery, call} from 'redux-saga/effects';
import {REGISTER_USER, registerUserSuccess, LOGIN_USER, loginUserSuccess, logoutUserSuccess, LOGOUT_USER} from '../actions/auth_actions';
import { api } from '../api';

export function* registerUser(action) {
    const reply = yield call(api.register,  action.data, {token: action.data.token});
    
    yield put(registerUserSuccess(reply));
}

export function* loginUser(action) {
    const reply = yield call(api.login, action.data, {token: action.data.token});
    yield put(loginUserSuccess(reply));

}

export function* logoutUser(action) {
    const reply = yield call(api.logout, action.data, {token: action.data.token});
    yield put(logoutUserSuccess(reply));
}

export function* auth() {
    yield takeEvery(REGISTER_USER, registerUser);
    yield takeEvery(LOGIN_USER, loginUser);
    yield takeEvery(LOGOUT_USER, logoutUser);
  }