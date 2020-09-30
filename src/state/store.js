/**
 * ************************************
 *
 * @module  store.js
 * @author  mpeters
 * @date    09/30/2020
 * @description Redux 'single source of truth'
 * additions include: redux-saga and enabling use
 * of redux dev-tools
 *
 * ************************************
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers/weatherDataReducer';
import saga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

// createStore only takes one 'enhancer function', combined applyMiddleware() and
// composeWithDevTools() with 'compose'.
const store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
);

sagaMiddleware.run(saga);

export default store;
