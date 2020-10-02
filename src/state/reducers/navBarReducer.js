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

const weatherDataReducer = (state = initialState, action) => {
  const locationState = {
    ...state.locationData,
  };

  switch (action.type) {
    case types.FETCH_WEATHER_BY_LOCATION:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default weatherDataReducer;
