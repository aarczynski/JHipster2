import { CLEAR, UPDATE } from './actionTypes';

export function emitUpdate(val) {
    return {
        type: UPDATE,
        payload: val
    }
};
export function emitClear() {
    return {
        type: CLEAR
    }
};
