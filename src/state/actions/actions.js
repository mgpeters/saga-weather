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

// Weather Data Actions
export const getWeather = (location) => ({
  type: types.FETCH_WEATHER_BY_LOCATION,
  payload: location,
});

export const updateLocation = (location) => ({
  type: types.UPDATE_LOCATION,
  payload: location,
});

export const toggleModal = () => ({
  type: types.TOGGLE_MODAL,
});

// Navbar Actions
export const toggleNavbar = () => ({
  type: types.NAVBAR_TOGGLE,
});

export const handleSearchChange = (input) => ({
  type: types.HANDLE_SEARCH_CHANGE,
  payload: input,
});

export const searchNewLocation = (input) => ({
  type: types.SEARCH_NEW_LOCATION,
  payload: input,
});
