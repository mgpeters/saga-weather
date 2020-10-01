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

export const getWeather = (data) => ({
  type: types.FETCH_WEATHER_BY_LOCATION,
  payload: data,
});

export const updateLocation = (data) => ({
  type: types.UPDATE_LOCATION,
  payload: data,
});
