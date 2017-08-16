import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Main from './components/Main';

const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'USERS_FETCH':
            break;
    }
    return state;
}

const store = createStore(combineReducers({reducer}));

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('react-app')
);