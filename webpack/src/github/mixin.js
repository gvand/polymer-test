import ReduxMixin from '../ReduxMixin';
import { githubUsernameChange, githubReposRequest } from './actions';

export default Parent => class GitHubMixin extends ReduxMixin(Parent) {
    static get properties() {
        return {
            suggestions: {
                type: Array,
                statePath: 'github.suggestions'
            },
            repositories: {
                type: Array,
                statePath: 'github.repositories'
            },
            username: {
                type: String,
                statePath: 'github.username'
            }
        };
    }
    static get actions() {
        return {
            githubUsernameChange,
            githubReposRequest
        };
    }
};