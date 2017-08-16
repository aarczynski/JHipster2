import { SHOW_SPINNER, HIDE_SPINNER } from '../actions/actionTypes';

const initialState = {
    show: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SPINNER:
            state = {show: true}
            break;
        case HIDE_SPINNER:
            state = {show: false}
            break;
    }
    return state;
};
