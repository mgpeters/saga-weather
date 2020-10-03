/**
 * ************************************
 *
 * @module  WeekDay.jsx
 * @author  mpeters
 * @date    10/03/2020
 * @description Current Daily Weather for the
 * week
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/components/Day.scss';

const Day = ({ main, temp, date, weatherIcon }) => {
  return main ? (
    <div className="weather-display--current-weather__daily-display--day">
      <h4 className="weather-display--current-weather__daily-display--day__date">{`${date.weekday} - ${date.dateNoYear}`}</h4>
      <img
        className="weather-display--current-weather__daily-display--day__img"
        src={weatherIcon}
        alt={`${main}`}
      ></img>
      <h4 className="weather-display--current-weather__daily-display--day__temp">{`${temp} F`}</h4>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

Day.propTypes = {
  main: PropTypes.string,
  temp: PropTypes.number,
  date: PropTypes.object,
  weatherIcon: PropTypes.string,
};

export default Day;
