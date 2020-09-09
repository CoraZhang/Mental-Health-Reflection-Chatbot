import { combineReducers } from 'redux';
import messageReducer from './messageReducer';
import sessionIDReducer from './sessionIDReducer';

export default combineReducers({
    messages: messageReducer,
    sessionID: sessionIDReducer
});