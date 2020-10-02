/**
 * ************************************
 *
 * @module  combinedReducers.js
 * @author  mpeters
 * @date    10/02/2020
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import navBarReducer from './navBarReducer';
import weatherDataReducer from './weatherDataReducer';

// combine reducers
const reducers = combineReducers({
  weather: weatherDataReducer,
  nav: navBarReducer,
});

// make the combined reducers available for import
export default reducers;
