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
import { Link } from 'react-router-dom';

import LocationSearch from '../components/LocationSearch.jsx';
import LocationNavButton from '../components/LocationNavButton.jsx';

// import styles from '../../styles/components/LocationNavButton.scss';

// <LocationNavButton
//   key={`${location}-key`}
//   locationName={location[0]}
// />

const clicked = () => {
  console.log('ckicjed');
};

const LocationNav = ({ locations }) => {
  return (
    <div className="navbar--location-list">
      <LocationSearch />
      {locations.map((location) => (
        <Link to={`/${location[1]}`} key={`${location}-key`}>
          <LocationNavButton locationName={location[0]} onClick={clicked} />
        </Link>
      ))}
    </div>
  );
};

LocationNav.propTypes = {
  locations: PropTypes.array,
};

export default LocationNav;
