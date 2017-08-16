import { createStore, combineReducers } from 'redux';
import spinnerReducer from './reducers/spinnerReducer';
import usersReducer from './reducers/usersReducer';

export default createStore(combineReducers({spinnerReducer, usersReducer}));
