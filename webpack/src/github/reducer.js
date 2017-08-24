import {
    GITHUB_REPOS_REQUEST,
    GITHUB_REPOS_LOADED,
    GITHUB_REPOS_ERROR,
    GITHUB_USERNAME_CHANGE
} from './actions';

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
                username: action.name.replace(/@/gi, '')
            };
        default:
            return state;
    }
};

