import { createStore, combineReducers } from 'redux';
import spinnerReducer from './reducers/spinnerReducer';

export default createStore(combineReducers({spinnerReducer}));



