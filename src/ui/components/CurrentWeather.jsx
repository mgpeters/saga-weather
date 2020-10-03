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
      <h3>Current Weather</h3>
      <h3>
        <span>{`${currentDate().fullDate} - ${formatTime(dt)}`}</span>
      </h3>
      <h3>{`${temp} F`}</h3>
      <img src={weatherIcon(icon)} alt={`${main} - ${description}`}></img>
      <h3>{main}</h3>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default CurrentWeather;
