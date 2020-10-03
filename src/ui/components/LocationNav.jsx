/**
 * ************************************
 *
 * @module  LocationNav.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Location NavBar component
 * to select a locations
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

import LocationSearch from '../components/LocationSearch.jsx';
import LocationNavButton from '../components/LocationNavButton.jsx';

// import styles from '../../styles/components/LocationNavButton.scss';

const LocationNav = ({ locations }) => {
  return (
    <div className="navbar--location-list">
      <LocationSearch />
      {locations.map((location) => (
        <LocationNavButton key={`${location}-key`} locationName={location} />
      ))}
    </div>
  );
};

LocationNav.propTypes = {
  locations: PropTypes.array,
};

export default LocationNav;
