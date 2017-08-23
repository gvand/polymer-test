import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import PolymerRedux from 'polymer-redux';
import { reducer } from './count/reducer';

const initialState = {count: 0};
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : Redux.compose;

const enhancer = composeEnhancers(middleware);
const store = createStore(reducer, initialState, enhancer);
export default PolymerRedux(store);