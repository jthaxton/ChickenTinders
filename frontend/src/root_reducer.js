
import { combineReducers } from 'redux';
import {authReducer} from './auth/reducers/auth_reducer'
const RootReducer = combineReducers({
    authReducer
});

export default RootReducer;