import { fork, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    GITHUB_REPOS_REQUEST,
    GITHUB_USERNAME_CHANGE,
    githubReposLoaded,
    githubReposError,
    githubReposRequest
} from './actions';

import request from '../utils/request';

const getUsername = state => state.github.username;

export function* getRepos() {
    const username = yield select(getUsername);
    const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
    try {
        const repos = yield call(request, requestURL);
        yield put(githubReposLoaded(repos));
    } catch (error) {
        yield put(githubReposError(error));
    }
}

export function* userChanged() {
    yield put(githubReposRequest());
}

export function* watchUsername() {
    yield takeLatest(GITHUB_USERNAME_CHANGE, userChanged);
}

export function* watchRequest() {
    yield takeLatest(GITHUB_REPOS_REQUEST, getRepos);
}

export const sagas = [
    fork(watchRequest),
    fork(watchUsername)
];
