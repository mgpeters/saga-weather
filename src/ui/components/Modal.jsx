/**
 * ************************************
 *
 * @module  Modal.jsx
 * @author  mpeters
 * @date    10/04/2020
 * @description Modal component
 *
 *
 * ************************************
 */

import React from 'react';
// import PropTypes from 'prop-types';

import styles from '../../styles/components/Modal.scss';

const Modal = ({
  dailyIndex,
  currentDate,
  formatTime,
  weatherIcon,
  toggleModal,
}) => {
  const { dt, sunrise, sunset, wind_speed } = dailyIndex;
  const { icon, description } = dailyIndex.weather[0];

  return (
    <div className="weather-display--modal">
      <button onClick={() => toggleModal()}>X</button>
      <h3>
        <span>{`Sunrise: ${formatTime(sunrise)} Sunset - ${formatTime(
          sunset
        )}`}</span>
      </h3>
      <h3>{`Windspeed ${wind_speed}mph`}</h3>
      <img src={weatherIcon(icon)} alt={`${description}`}></img>
      <h3>{description}</h3>
    </div>
  );
};

// LocationTitle.propTypes = {
//   currentLocation: PropTypes.object,
// };

export default Modal;
