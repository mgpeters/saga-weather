/**
 * ************************************
 *
 * @module  HourlyDisplay.jsx
 * @author  mpeters
 * @date    10/03/2020
 * @description Current Weather hourly display
 * for the current locations next 6 hours
 *
 * ************************************
 */

import React from 'react';

import Hourly from './Hourly.jsx';
// import styles from '../../styles/components/LocationNavButton.scss';

const HourlyDisplay = ({ hourly, weatherIcon, formatTime }) => {
  const hourlyArray = [];

  // Only want the next 6 hours
  for (let i = 0; i < 6; i += 1) {
    const { dt, temp } = hourly[i];
    const { icon, main } = hourly[i].weather[0];

    hourlyArray.push(
      <Hourly
        key={`hourly-key${i}`}
        main={main}
        temp={temp}
        time={formatTime(dt)}
        weatherIcon={weatherIcon(icon)}
      />
    );
  }

  return hourly ? (
    <div className="weather-display--current-weather__hourly-display">
      {hourlyArray}
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default HourlyDisplay;
