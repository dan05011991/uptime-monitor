import { combineReducers } from 'redux';
import monitorReducer from './monitorReducer';

export default combineReducers({
    monitors: monitorReducer
});