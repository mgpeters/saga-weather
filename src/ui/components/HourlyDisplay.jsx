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
import PropTypes from 'prop-types';

import Hourly from './Hourly.jsx';
import '../../styles/components/HourlyDisplay.scss';

const HourlyDisplay = ({ hourly, weatherIcon, formatTime }) => {
  const hourlyArray = [];

  // Only want the next 6 hours
  for (let i = 1; i < 7; i += 1) {
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
    <h2 className="weather-display--current-weather__hourly-display__loading">
      Loading...
    </h2>
  );
};

HourlyDisplay.propTypes = {
  hourly: PropTypes.array,
  weatherIcon: PropTypes.func,
  formatTime: PropTypes.func,
};

export default HourlyDisplay;
