import axios from 'axios';
import * as Dialogs from './notification';
import { DISPLAY_USERS } from './actionTypes';
import store from '../store';
import { showSpinner, hideSpinner } from '../actions/spinner';

export function fetchUsers() {
    store.dispatch(showSpinner());
    axios.get('/users')
        .then(response => {
            store.dispatch(displayUsers(response.data));
            store.dispatch(hideSpinner());
            Dialogs.showSuccessDialog('HTTP 200', 'Users fetched from backend server');
        })
        .catch(error => {
            store.dispatch(displayUsers([]));
            store.dispatch(hideSpinner());
            if (/5\d\d/.test(error.response.status)) {
                Dialogs.showErrorDialog('HTTP 500', 'Internal Server Error');
            }
        });
}

function displayUsers(users) {
    return {
        type: DISPLAY_USERS,
        payload: users
    }
};
