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

import LocationSearch from './LocationSearch.jsx';
import LocationNavButton from './LocationNavButton.jsx';

import defaultLocations from '../../util/locations';

import '../../styles/components/LocationNav.scss';

const LocationNav = ({ fetchWeather, searchNewLocation, locations }) => {
  return (
    <div className="navbar--location-list">
      <LocationSearch />
      {locations.map((location) => (
        <Link
          to={`/${location[1]}`}
          key={`${location}-key`}
          onClick={() => {
            if (defaultLocations[location[1]]) fetchWeather(location[1]);
            else searchNewLocation(location[0]);
          }}
        >
          <LocationNavButton locationName={location[0]} />
        </Link>
      ))}
    </div>
  );
};

LocationNav.propTypes = {
  locations: PropTypes.array,
  fetchWeather: PropTypes.func,
  searchNewLocation: PropTypes.func,
};

export default LocationNav;
