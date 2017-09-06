import {
    GITHUB_REPOS_REQUEST,
    GITHUB_REPOS_LOADED,
    GITHUB_REPOS_ERROR,
    GITHUB_USERNAME_CHANGE,
    GITHUB_USERNAME_INPUT,
    GITHUB_USERS_ERROR,
    GITHUB_USERS_LOADED,
    GITHUB_USERS_REQUEST
} from './constants';

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case GITHUB_REPOS_REQUEST:
            return state = {
                ...state,
                loading: true,
                error: false,
                repositories: false
            };
        case GITHUB_REPOS_LOADED:
            return state = {
                ...state,
                loading: false,
                repositories: action.repos
            };
        case GITHUB_REPOS_ERROR:
            return state = {
                ...state,
                loading: false,
                error: action.error,
            };
        case GITHUB_USERNAME_CHANGE:
            return state = {
                ...state,
                username: action.username.replace(/@/gi, ''),
                filter: action.filter
            };
        case GITHUB_USERS_REQUEST:
            return state = {
                ...state,
                repositories: false
            };
        case GITHUB_USERS_LOADED:
            return state = {
                ...state,
                suggestions: action.users
            };
        case GITHUB_USERS_ERROR:
            return state = {
                ...state,
                error: action.error,
            };
        case GITHUB_USERNAME_INPUT:
            return state = {
                ...state,
                username: action.username,
                filter: action.filter
            };
        default:
            return state;
    }
};
