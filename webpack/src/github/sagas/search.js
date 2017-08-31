import { fork, put, takeLatest } from 'redux-saga/effects';
import {
    GITHUB_USERNAME_CHANGE,
    GITHUB_USERNAME_INPUT,
    githubReposRequest,
    githubUsersRequest
} from '../actions';

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
