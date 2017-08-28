import {
    PLUS,
    MINUS
} from './actions';

export const reducer = (state = { number: 0 }, action) => {
    switch (action.type) {
        case PLUS:
            return state = {...state, number: parseInt(state.number + 1)};
        case MINUS:
            return state = {...state, number: parseInt(state.number - 1)};
        default:
            return state;
    }
};