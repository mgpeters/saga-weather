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

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="weather-display--current-weather">
      <h2>Date: {currentWeather.dt}</h2>
    </div>
  );
};

export default CurrentWeather;
