import './template.html';
import ReduxMixin from '../ReduxMixin';
import { githubUsernameChange, githubReposRequest } from './actions';

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
            }
        };
    }

    static get actions() {
        return {
            githubUsernameChange,
            githubReposRequest
        };
    }

    connectedCallback() {
        super.connectedCallback();
        if (this.username && this.username.trim().length > 0) {
            this.dispatch('githubReposRequest');
        }
    }

    onComboBoxChange() {
        this.dispatch('githubUsernameChange', this.$['username-list'].value);
    }
}

window.customElements.define(IngGithub.is, IngGithub);