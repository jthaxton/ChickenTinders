import { combineReducers } from 'redux';
import {auth} from './auth/reducers/auth_reducer'
const RootReducer = combineReducers({
    auth
});

export default RootReducer;