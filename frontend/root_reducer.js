import { combineReducers } from 'redux';
import { auth } from './auth/reducers/auth_reducer'
import { landingPage } from './landing_page/reducers/landing_page_reducer';

const RootReducer = combineReducers({
    auth,
    landingPage,
});

export default RootReducer;