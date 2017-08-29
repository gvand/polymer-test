import './template.html';
import ReduxMixin from '../ReduxMixin';
import {plus, minus} from './actions';

class IngCount extends ReduxMixin(Polymer.Element) {

    static get is() { return 'ing-count'; }

    static get properties() {
        return {
            count: {
                type: Number,
                statePath: 'count.number'
            }
        };
    }

    static get actions() {
        return {
            plus,
            minus
        };
    }

    changeTheme() {
        this.updateStyles({
            '--ing-count-color': '#d91a2a'
        });
    }

    handlePlus() {
        this.dispatch('plus');
    }
    handleMinus() {
        this.dispatch('minus');
    }
}

window.customElements.define(IngCount.is, IngCount);