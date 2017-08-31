import { fork, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    GITHUB_REPOS_REQUEST,
    githubReposLoaded,
    githubReposError,
} from '../actions';

import request from '../../utils/request';

const getInput = state => state.github.username;

export function* getRepos() {
    const username = yield select(getInput);
    const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
    try {
        const repos = yield call(request, requestURL);
        yield put(githubReposLoaded(repos));
    } catch (error) {
        yield put(githubReposError(error));
    }
}

export function* watchRepoRequest() {
    yield takeLatest(GITHUB_REPOS_REQUEST, getRepos);
}

export default [
    fork(watchRepoRequest)
];