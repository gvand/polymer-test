export const GITHUB_REPOS_REQUEST = 'GITHUB_REPOS_REQUEST';
export const githubReposRequest = () => ({
    type: GITHUB_REPOS_REQUEST
});

export const GITHUB_REPOS_LOADED = 'GITHUB_REPOS_LOADED';
export const githubReposLoaded = repos => ({
    type: GITHUB_REPOS_LOADED,
    repos
});

export const GITHUB_REPOS_ERROR = 'GITHUB_REPOS_ERROR';
export const githubReposError = error => ({
    type: GITHUB_REPOS_LOADED,
    error
});

export const GITHUB_USERNAME_CHANGE = 'GITHUB_USERNAME_CHANGE';
export const githubUsernameChange = name => ({
    type: GITHUB_USERNAME_CHANGE,
    name
});




export const GITHUB_USERS_REQUEST = 'GITHUB_USERS_REQUEST';
export const githubUsersRequest = () => ({
    type: GITHUB_USERS_REQUEST
});

export const GITHUB_USERS_LOADED = 'GITHUB_USERS_LOADED';
export const githubUsersLoaded = users => ({
    type: GITHUB_USERS_LOADED,
    users
});

export const GITHUB_USERS_ERROR = 'GITHUB_USERS_ERROR';
export const githubUsersError = error => ({
    type: GITHUB_USERS_ERROR,
    error
});

export const GITHUB_USERNAME_INPUT = 'GITHUB_USERNAME_INPUT';
export const githubUsernameInput = name => ({
    type: GITHUB_USERNAME_INPUT,
    name
});