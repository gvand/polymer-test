import {
    GITHUB_REPOS_REQUEST,
    GITHUB_REPOS_LOADED,
    GITHUB_REPOS_ERROR,
    GITHUB_USERNAME_CHANGE,
    GITHUB_USERS_REQUEST,
    GITHUB_USERS_LOADED,
    GITHUB_USERS_ERROR,
    GITHUB_USERNAME_INPUT
} from './constants';


export const githubReposRequest = () => ({
    type: GITHUB_REPOS_REQUEST
});

export const githubReposLoaded = repos => ({
    type: GITHUB_REPOS_LOADED,
    repos
});

export const githubReposError = error => ({
    type: GITHUB_REPOS_ERROR,
    error
});

export const githubUsernameChange = (username, filter) => ({
    type: GITHUB_USERNAME_CHANGE,
    username,
    filter
});




export const githubUsersRequest = () => ({
    type: GITHUB_USERS_REQUEST
});

export const githubUsersLoaded = users => ({
    type: GITHUB_USERS_LOADED,
    users
});

export const githubUsersError = error => ({
    type: GITHUB_USERS_ERROR,
    error
});

export const githubUsernameInput = (username, filter) => ({
    type: GITHUB_USERNAME_INPUT,
    username,
    filter
});