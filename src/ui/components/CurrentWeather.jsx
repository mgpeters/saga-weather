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

const CurrentWeather = ({ currentWeather, currentDate, formatTime }) => {
  console.log('current weather', currentWeather);

  const { dt, temp } = currentWeather.current;
  const { icon, main } = currentWeather.current.weather[0];

  return currentWeather ? (
    <div className="weather-display--current-weather">
      <h2>
        <span>{`${currentDate()} - ${formatTime(dt)}`}</span>
      </h2>
      <h2>{`${temp} F`}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="current weather icon"
      ></img>
      <h2>{main}</h2>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default CurrentWeather;
