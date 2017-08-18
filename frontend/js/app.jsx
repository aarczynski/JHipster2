import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import inputReducer from './reducers/inputReducer';
import Main from './components/Main';

const store = createStore(
    combineReducers({inputReducer})
);

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
    document.getElementById('react-app')
);