import { call, put } from 'redux-saga/effects';
// import {
//     successResult,
//     failedResult,
//     pendingResult
// } from '../count';
import { api } from './service';

function* fetchEntities(apiFunction, actions, id, param) {
    try {
        yield put(actions.pending(id));
        const data = yield call(apiFunction, param || id);
        yield put(actions.fulfilled(id, data));
    }
    catch (error) {
        yield put(actions.failed(error));
    }
}

export const fetchResult = fetchEntities.bind(
    null,
    api.fetchResult,
    {
        fulfilled: successResult,
        failed: failedResult,
        pending: pendingResult
    }
);