/**
 * ************************************
 *
 * @module  CityNavButton.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Location
 * component
 *
 * ************************************
 */

import React from 'react';

const LocationNavButton = ({ locationName }) => {
  return (
    <div>
      <button>{locationName}</button>
    </div>
  );
};

export default LocationNavButton;
