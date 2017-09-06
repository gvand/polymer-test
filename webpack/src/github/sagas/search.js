import { fork, put, takeLatest } from 'redux-saga/effects';
import {
    githubReposRequest,
    githubUsersRequest
} from '../actions';
import {
    GITHUB_USERNAME_CHANGE,
    GITHUB_USERNAME_INPUT
} from '../constants';

export function* changed() {
    yield put(githubReposRequest());
}

export function* watchChange() {
    yield takeLatest(GITHUB_USERNAME_CHANGE, changed);
}

export function* filtered() {
    yield put(githubUsersRequest());
}

export function* watchInput() {
    yield takeLatest(GITHUB_USERNAME_INPUT, filtered);
}

export default [
    fork(watchChange),
    fork(watchInput)
];
