/**
 * ************************************
 *
 * @module  navBarReducer.js
 * @author  mpeters
 * @date    10/02/2020
 * @description reducer for nabar data
 * and functionality
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  locations: [
    ['New York, NY', 'newyorkcity'],
    ['Miami, FL', 'miami'],
    ['LosAngeles, CA', 'losangeles'],
  ],
  navBarExpanded: false,
  searchedLocation: '',
  pathname: '/',
};

const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NAVBAR_TOGGLE:
      return {
        ...state,
        navBarExpanded: !state.navBarExpanded,
      };
    case types.HANDLE_SEARCH_CHANGE:
      return {
        ...state,
        searchedLocation: action.payload,
      };
    case types.SEARCH_NEW_LOCATION:
      const normalizeKeyName = action.payload.split(', ')[0].toLowerCase();

      // for (let i = 0; i < state.locations.length; i += 1) {
      //   if (state.locations[i].includes(action.payload)) {
      //     return {
      //       ...state,
      //     };
      //   }
      // }

      return {
        ...state,
        locations: [...state.locations, [action.payload, normalizeKeyName]],
      };
    case types.UPDATE_PATHNAME:
      return {
        ...state,
        pathname: action.payload,
      };
    default:
      return state;
  }
};

export default navBarReducer;
