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

import api from '../../util/apiKeys';

const initialState = {
  locationData: {},
};

const weatherDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHED_WEATHER:
      // do some stuff
      return {
        ...state,
        loading: true,
      };
    case types.FETCHED_WEATHER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        locationData: action.data,
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
