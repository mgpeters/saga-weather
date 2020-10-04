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

const RefreshWeather = ({ fetchWeather, keyName }) => {
  return keyName ? (
    <div className="weather-display--location-title">
      <button onClick={() => fetchWeather(keyName)}>Refresh</button>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

RefreshWeather.propTypes = {
  fetchWeather: PropTypes.func,
  keyName: PropTypes.string,
};

export default RefreshWeather;
