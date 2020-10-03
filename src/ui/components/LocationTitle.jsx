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
// import styles from '../../styles/components/LocationNavButton.scss';

const LocationTitle = ({ currentLocation }) => {
  return currentLocation ? (
    <div className="weather-display--location-title">
      <h1>{`${currentLocation.name}, ${currentLocation.state}, ${currentLocation.country}`}</h1>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

LocationTitle.propTypes = {
  currentLocation: PropTypes.object,
};

export default LocationTitle;
