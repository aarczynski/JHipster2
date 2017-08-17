import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import spinnerReducer from './reducers/spinnerReducer';
import usersReducer from './reducers/usersReducer';
import Main from './components/Main';

const store = createStore(
    combineReducers({spinnerReducer, usersReducer}),
    {},
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('react-app')
);