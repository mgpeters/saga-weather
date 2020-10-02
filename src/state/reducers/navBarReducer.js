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
};

const navBarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NAVBAR_TOGGLE:
      return {
        ...state,
        navBarExpanded: !state.navBarExpanded,
      };
    default:
      return state;
  }
};

export default navBarReducer;
