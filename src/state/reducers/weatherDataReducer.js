import { render } from 'react-dom';
/**
 * ************************************
 *
 * @module  weatherDataReducer.js
 * @author  mpeters
 * @date    09/30/2020
 * @description reducer for fetched weather data
 * from OpenWeatherMap.org
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  locationData: {},
};

const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHED_WEATHER:
      // do some stuff
      console.log('fetched Weather Reducer Fired!');
      return {
        ...state,
      };
    case types.UPDATE_LOCATION:
      // do some stuff
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default weatherDataReducer;
