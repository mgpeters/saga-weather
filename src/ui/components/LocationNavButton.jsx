/**
 * ************************************
 *
 * @module  LocationNavButton.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Location NavBar Buttons
 * component to select a city
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/components/LocationNavButton.scss';

const LocationNavButton = ({ locationName, onClick }) => {
  return (
    <div className="navbar--location-list__buttons">
      <button onClick={() => onClick()}>{locationName}</button>
    </div>
  );
};

LocationNavButton.propTypes = {
  locationName: PropTypes.string,
};

export default LocationNavButton;
