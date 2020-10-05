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
import PropTypes from 'prop-types';

import '../../styles/components/CurrentWeather.scss';

const CurrentWeather = ({
  currentWeather,
  currentDate,
  formatTime,
  weatherIcon,
}) => {
  const { dt, temp } = currentWeather;
  const { icon, description, main } = currentWeather.weather[0];

  return currentWeather ? (
    <div className="weather-display--current-weather">
      <h2 className="weather-display--current-weather__title">
        <span>{`${currentDate().fullDate} - ${formatTime(dt)}`}</span>
      </h2>
      <h3 className="weather-display--current-weather__temp">{`${temp} F`}</h3>
      <img
        className="weather-display--current-weather__img"
        src={weatherIcon(icon)}
        alt={`${main} - ${description}`}
      ></img>
      <h3 className="weather-display--current-weather__desc">{main}</h3>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object,
  currentDate: PropTypes.func,
  formatTime: PropTypes.func,
  weatherIcon: PropTypes.func,
};

export default CurrentWeather;
