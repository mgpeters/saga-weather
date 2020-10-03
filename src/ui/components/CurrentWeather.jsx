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

import styles from '../../styles/components/CurrentWeather.scss';

const CurrentWeather = ({
  currentWeather,
  currentDate,
  formatTime,
  weatherIcon,
}) => {
  console.log('current weather', currentWeather);

  const { dt, temp } = currentWeather;
  const { icon, description, main } = currentWeather.weather[0];

  return currentWeather ? (
    <div className="weather-display--current-weather">
      <h2>
        <span>{`${currentDate()} - ${formatTime(dt)}`}</span>
      </h2>
      <h2>{`${temp} F`}</h2>
      <img src={weatherIcon(icon)} alt={`${main} - ${description}`}></img>
      <h2>{main}</h2>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default CurrentWeather;
