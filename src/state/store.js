/**
 * ************************************
 *
 * @module  store.js
 * @author  mpeters
 * @date    09/30/2020
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducer';

const store = createStore(reducers, composeWithDevTools());

export default store;
