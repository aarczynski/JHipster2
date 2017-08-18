import { UPDATE, CLEAR } from '../actions/actionTypes';

const initialState = {
    value: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE:
            state = {value: action.payload};
            break;
        case CLEAR:
            state = {value: ''};
            break;
    }

    return state;
};
