import { fork, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    githubUsersError,
    githubUsersLoaded
} from '../actions';
import {
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    GITHUB_USERS_REQUEST
} from '../constants';
import request from '../../utils/request';

const getFilter = state => state.github.filter;

export function* getUsers() {
    const filter = yield select(getFilter);
    const requestURL = `https://api.github.com/search/users?q=${filter}&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`;
    try {
        const result = yield call(request, requestURL);
        yield put(githubUsersLoaded(result.items));
    } catch (error) {
        yield put(githubUsersError(error));
    }
}

export function* watchUserRequest() {
    yield takeLatest(GITHUB_USERS_REQUEST, getUsers);
}

export default [
    fork(watchUserRequest)
];
