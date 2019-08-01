import {all} from 'redux-saga/effects'
import {auth} from "./auth/sagas/auth_saga"
export default function* rootSaga() {
    yield all([
      auth(),
    ])
  }