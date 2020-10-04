/**
 * ************************************
 *
 * @module  Hourly.jsx
 * @author  mpeters
 * @date    10/03/2020
 * @description Current Weather hourly components
 *
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/components/Hourly.scss';

const Hourly = ({ main, temp, time, weatherIcon }) => {
  return main ? (
    <div className="weather-display--current-weather__hourly-display--hourly">
      <img src={weatherIcon} alt={`${main}`}></img>
      <h4>{time}</h4>
      <h4>{main}</h4>
      <h4>{`${temp} F`}</h4>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

Hourly.propTypes = {
  main: PropTypes.string,
  temp: PropTypes.number,
  time: PropTypes.string,
  weatherIcon: PropTypes.string,
};

export default Hourly;
