import {
    GITHUB_USERS_REQUEST,
    GITHUB_USERS_LOADED,
    GITHUB_USERS_ERROR,
    GITHUB_USERNAME_CHANGE,
    GITHUB_REPOS_ERROR,
    GITHUB_REPOS_LOADED,
    GITHUB_REPOS_REQUEST,
    GITHUB_USERNAME_INPUT
} from '../constants';

import {
    githubUsersLoaded,
    githubUsersError,
    githubUsersRequest,
    githubReposRequest,
    githubReposError,
    githubReposLoaded,
    githubUsernameChange,
    githubUsernameInput
} from '../actions';

describe('GitHub Actions', () => {
    describe('githubUsersRequest', () => {
        it('should return the correct type', () => {
            const expected = {
                type: GITHUB_USERS_REQUEST,
            };
            expect(githubUsersRequest()).toEqual(expected);
        });
    });

    describe('githubUsersLoaded', () => {
        it('should return the correct type and the passed users', () => {
            const users = ['Test'];
            const expected = {
                type: GITHUB_USERS_LOADED,
                users: users,
            };
            expect(githubUsersLoaded(users)).toEqual(expected);
        });
    });

    describe('repoLoadingError', () => {
        it('should return the correct type and the error', () => {
            const error = {
                msg: 'Something went wrong!',
            };
            const expected = {
                type: GITHUB_USERS_ERROR,
                error: error,
            };
            expect(githubUsersError(error)).toEqual(expected);
        });
    });
});