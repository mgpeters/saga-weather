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

// import styles from '../../styles/components/LocationNavButton.scss';

const Day = ({ main, temp, date, weatherIcon }) => {
  return main ? (
    <div className="weather-display--current-weather__hourly-display--hourly">
      <h4>{`${date.weekday} - ${date.dateNoYear}`}</h4>
      <img src={weatherIcon} alt={`${main}`}></img>
      <h4>{`${temp} F`}</h4>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default Day;
