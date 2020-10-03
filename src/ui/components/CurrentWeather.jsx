/**
 * ************************************
 *
 * @module  CurrentWeather.jsx
 * @author  mpeters
 * @date    10/03/2020
 * @description Current Weather display
 *
 *
 * ************************************
 */

import React from 'react';

// import styles from '../../styles/components/LocationNavButton.scss';

const CurrentWeather = ({ currentWeather, formatTime }) => {
  console.log('current weather', currentWeather);
  return currentWeather ? (
    <div className="weather-display--current-weather">
      <h2>{formatTime(currentWeather.current.dt)}</h2>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default CurrentWeather;
