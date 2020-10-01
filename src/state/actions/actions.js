/**
 * ************************************
 *
 * @module  actions.js
 * @author  mpeters
 * @date    09/30/2020
 * @description Action Creators
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

export const getWeather = (location) => ({
  type: types.FETCH_WEATHER_BY_LOCATION,
  payload: location,
});

export const updateLocation = (location) => ({
  type: types.UPDATE_LOCATION,
  payload: location,
});
