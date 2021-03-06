import {all} from 'redux-saga/effects'
import {auth} from "./auth/sagas/auth_saga"
import { landingPage } from './landing_page/sagas/saga'
import { dashboard } from './dashboard/sagas/saga'
export default function* rootSaga() {
    yield all([
      auth(),
      landingPage(),
      dashboard(),
    ])
  }