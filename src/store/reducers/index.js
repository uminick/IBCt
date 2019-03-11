import {combineReducers} from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import send from './Send';

const rootReducer=combineReducers({
    currentUser,
    errors,
    send
});

export default rootReducer;