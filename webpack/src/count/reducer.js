import {
    SUCCESS_RESULT,
    PLUS,
    MINUS
} from './actions';

export const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case SUCCESS_RESULT:
            return state = {...state, count: parseInt(action.payload.result)};
        case PLUS:
            return state = {...state, count: parseInt(state.count + 1)};
        case MINUS:
            return state = {...state, count: parseInt(state.count - 1)};
        default:
            return  state;
    }
};


// import {
//     LOAD_RESULT,
//     PENDING_RESULT,
//     SUCCESS_RESULT
// } from './actions';
//
// const result = (state = { isNew: true, isPending: true}, action) => {
//     const { payload } = action;
//     switch (action.type) {
//         case LOAD_RESULT:
//             return state;
//         case PENDING_RESULT:
//             return state = {
//                 ...state,
//                 isPending: true
//             };
//         case SUCCESS_RESULT:
//             return state = {
//                 ...state,
//                 isNew: false,
//                 isPending: false,
//                 data: payload.result.results
//             };
//         default:
//             return state;
//     }
// };
//
// export default (state = { current: '', results: {} }, action) => {
//     const { payload } = action;
//     switch (action.type) {
//         case LOAD_RESULT:
//             return state = {
//                 ...state,
//                 current: payload.id,
//                 results: {
//                     ...state.results,
//                     [payload.id]: result(state[payload.id], action)
//                 }
//             };
//         case PENDING_RESULT:
//         case SUCCESS_RESULT:
//             return state = {
//                 ...state,
//                 results: {
//                     ...state.results,
//                     [payload.id]: result(state[payload.id], action)
//                 }
//             };
//         default:
//             return state;
//     }
// }