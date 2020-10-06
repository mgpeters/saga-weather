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

import '../../styles/components/RefreshWeather.scss';

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
    <div className="weather-display--location-refresh">
      <button
        className="weather-display--location-refresh__btn"
        onClick={() => fetchWeather(locationPayload)}
      >
        Refresh
      </button>
    </div>
  ) : (
    <h1 className="weather-display--location-refresh__loading">Loading...</h1>
  );
};

RefreshWeather.propTypes = {
  currentLocation: PropTypes.object,
  fetchWeather: PropTypes.func,
};

export default RefreshWeather;
