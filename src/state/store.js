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
import reducer from './reducers/weatherDataReducer';

const store = createStore(reducer, composeWithDevTools());

export default store;
