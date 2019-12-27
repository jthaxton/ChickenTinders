import { combineReducers } from 'redux';
import { auth } from './auth/reducers/auth_reducer'
import { landingPage } from './landing_page/reducers/landing_page_reducer';
import { dashboard } from './dashboard/reducers/reducer';

const RootReducer = combineReducers({
    auth,
    landingPage,
    dashboard,
});


export default RootReducer;