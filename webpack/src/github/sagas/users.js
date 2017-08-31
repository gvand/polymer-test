import { fork, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    GITHUB_USERS_REQUEST,
    githubUsersError,
    githubUsersLoaded
} from '../actions';
import { CLIENT_ID, CLIENT_SECRET } from '../constants';
import request from '../../utils/request';

const getFilter = state => state.github.filter;

export function* getUsers() {
    const filter = yield select(getFilter);
    const requestURL = `https://api.github.com/search/users?q=${filter}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    try {
        const result = yield call(request, requestURL);
        let users = [];
        if(result.items){ users = result.items.map(item => item.login); }
        yield put(githubUsersLoaded(users));
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
