/**
 * ************************************
 *
 * @module  RefreshWeather.jsx
 * @author  mpeters
 * @date    10/04/2020
 * @description Button to refresh current weather
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

// import styles from '../../styles/components/LocationTitle.scss';

const RefreshWeather = ({ currentLocation, fetchWeather }) => {
  const { name, state, country } = currentLocation;
  const { lat, lon } = currentLocation.weatherData;

  const locationPayload = {
    name,
    state,
    country,
  };

  locationPayload.coord = {
    lat,
    lon,
  };

  return currentLocation ? (
    <div className="weather-display--location-title">
      <button onClick={() => fetchWeather(locationPayload)}>Refresh</button>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

RefreshWeather.propTypes = {
  currentLocation: PropTypes.object,
  fetchWeather: PropTypes.func,
};

export default RefreshWeather;
