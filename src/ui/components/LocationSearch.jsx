/**
 * ************************************
 *
 * @module  LocationSearch.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Location NavBar Buttons
 * component to select a city
 *
 * ************************************
 */

import React from 'react';

// import styles from '../../styles/components/LocationNavButton.scss';

const LocationSearch = ({ locationName }) => {
  return (
    <div className="navbar--location-search">
      <form>
        <label htmlFor="location-search">
          Search Additional Location
          <input
            type="text"
            id="location-search"
            name="location-search"
            placeholder="Location, City, Country"
          />
        </label>
      </form>
    </div>
  );
};

export default LocationSearch;
