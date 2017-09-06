import './template.html';
import ReduxMixin from '../ReduxMixin';
import {
    githubUsernameChange,
    githubUsernameInput,
    githubReposRequest
} from './actions';

class IngGithub extends ReduxMixin(Polymer.Element) {

    static get is() {
        return 'ing-github';
    }

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
            },
            filter: {
                type: String,
                statePath: 'github.filter'
            }
        };
    }

    static get actions() {
        return {
            githubUsernameChange,
            githubUsernameInput,
            githubReposRequest
        };
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.username && this.username.trim().length > 0) {
            this.dispatch('githubReposRequest');
        }
    }

    onChange() {
        const { value, filter } = this.$['username-list'];
        this.dispatch('githubUsernameChange', value, filter);
    }

    onFilter() {
        const { value, filter } = this.$['username-list'];
        this.dispatch('githubUsernameInput', value, filter);
    }
}

window.customElements.define(IngGithub.is, IngGithub);