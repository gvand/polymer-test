export const GITHUB_REPOS_REQUEST = 'GITHUB_REPOS_REQUEST';
export const githubReposRequest = () => ({
    type: GITHUB_REPOS_REQUEST
});

export const GITHUB_REPOS_LOADED = 'GITHUB_REPOS_LOADED';
export const githubReposLoaded = (repos, username) => ({
    type: GITHUB_REPOS_LOADED,
    repos,
    username
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