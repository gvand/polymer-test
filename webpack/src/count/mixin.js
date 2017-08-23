import ReduxMixin from '../ReduxMixin';
import {plus, minus, loadResult} from './actions';

export default Parent => class CountMixin extends ReduxMixin(Parent) {
    static get properties() {
        return {
            count: {
                type: Number,
                statePath: 'count'
            }
        };
    }
    static get actions() {
        return {
            plus,
            minus,
            loadResult
        };
    }
};