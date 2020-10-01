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
    case types.FETCH_WEATHER_BY_LOCATION:
      // do some stuff
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_WEATHER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        locationData: action.data,
      };
    case types.FETCH_WEATHER_FAILED:
      console.log(`Error Fetching Weather Data: ${action.message}`);
      return {
        ...state,
        loading: false,
        error: true,
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
