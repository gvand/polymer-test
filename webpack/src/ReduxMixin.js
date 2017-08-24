import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import PolymerRedux from 'polymer-redux';

import { reducer as countReducer } from './count/reducer';
import { reducer as githubReducer } from './github/reducer';
import { sagas as githubSagas } from './github/sagas';

const reducers = combineReducers({
    count: countReducer,
    github: githubReducer
});

function* sagas() {
    yield [...githubSagas];
}

const initialState = {
    count: {
        number: 0
    },
    github: {
        username: 'gvand',
        suggestions: ['amitevski','gvand'],
        repositories: false,
        loading: false,
        error: false,
    }
};

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(middleware);
const store = createStore(reducers, initialState, enhancer);
sagaMiddleware.run(sagas);
export default PolymerRedux(store);