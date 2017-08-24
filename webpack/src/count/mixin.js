import ReduxMixin from '../ReduxMixin';
import {plus, minus} from './actions';

export default Parent => class CountMixin extends ReduxMixin(Parent) {
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
};