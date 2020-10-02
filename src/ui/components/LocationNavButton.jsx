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

import styles from '../../styles/components/LocationNavButton.scss';

const LocationNavButton = ({ locationName }) => {
  return (
    <div className="navbar--location-list__buttons">
      <button>{locationName}</button>
    </div>
  );
};

export default LocationNavButton;
