import { DISPLAY_USERS } from '../actions/actionTypes';

const initialState = {
    users: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DISPLAY_USERS:
            state = {users: action.payload}
            break;
    }
    return state;
};
