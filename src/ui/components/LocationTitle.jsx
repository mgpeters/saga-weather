/**
 * ************************************
 *
 * @module  LocationTitle.jsx
 * @author  mpeters
 * @date    10/03/2020
 * @description Location header title component
 *
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/components/LocationTitle.scss';

const LocationTitle = ({ currentLocation }) => {
  return currentLocation ? (
    <div className="weather-display--location-title">
      <h1 className="weather-display--location-title__header">{`${currentLocation.name}, ${currentLocation.state}, ${currentLocation.country}`}</h1>
    </div>
  ) : (
    <h1 className="weather-display--location-title__loading">Loading...</h1>
  );
};

LocationTitle.propTypes = {
  currentLocation: PropTypes.object,
};

export default LocationTitle;
