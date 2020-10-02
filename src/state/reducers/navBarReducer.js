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
  locations: ['New York, NY', 'Miami, FL', 'LosAngeles, CA'],
  navBarExpanded: false,
  searchedLocation: '',
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
      console.log('search', action.payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default navBarReducer;
