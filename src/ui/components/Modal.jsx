/**
 * ************************************
 *
 * @module  Modal.jsx
 * @author  mpeters
 * @date    10/04/2020
 * @description Modal component
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/components/Modal.scss';

const Modal = ({
  dailyIndex,
  formatTime,
  weatherIcon,
  toggleModal,
  dailyDate,
  titleCase,
}) => {
  const { dt, sunrise, sunset, wind_speed } = dailyIndex;
  const { icon, description } = dailyIndex.weather[0];

  const date = dailyDate(dt);

  return (
    <div className="weather-display--modal">
      <button
        className="weather-display--modal__toggle-modal"
        onClick={() => toggleModal()}
      >
        X
      </button>
      <h3 className="weather-display--modal__header">{date.weekday}</h3>
      <img
        className="weather-display--modal__icon"
        src={weatherIcon(icon)}
        alt={`${description}`}
      ></img>
      <h4 className="weather-display--modal__description">
        {titleCase(description)}
      </h4>

      <h4 className="weather-display--modal__sunrise-sunset">
        <span>{`Sunrise: ${formatTime(sunrise)} - Sunset: ${formatTime(
          sunset
        )}`}</span>
      </h4>
      <h4 className="weather-display--modal__windspeed">{`Windspeed ${wind_speed}mph`}</h4>
    </div>
  );
};

Modal.propTypes = {
  dailyIndex: PropTypes.object,
  formatTime: PropTypes.func,
  weatherIcon: PropTypes.func,
  toggleModal: PropTypes.func,
};

export default Modal;
