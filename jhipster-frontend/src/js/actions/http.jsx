import axios from 'axios';
import * as Dialogs from './notification';
import { DISPLAY_USERS } from './actionTypes';
import { showSpinner, hideSpinner } from '../actions/spinner';

export function fetchUsers() {
    return function(dispatch) {
        dispatch(showSpinner());
        axios.get('/api/users')
            .then(response => {
                dispatch(displayUsers(response.data));
                dispatch(hideSpinner());
                Dialogs.showSuccessDialog('HTTP 200', 'Users fetched from backend server');
            })
            .catch(error => {
                dispatch(displayUsers([]));
                dispatch(hideSpinner());
                if (/5\d\d/.test(error.response.status)) {
                    Dialogs.showErrorDialog('HTTP 500', 'Internal Server Error');
                }
            });
    }
}

function displayUsers(users) {
    return {
        type: DISPLAY_USERS,
        payload: users
    }
};