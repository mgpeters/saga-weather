/**
 * ************************************
 *
 * @module  BadPath.jsx
 * @author  mpeters
 * @date    10/05/2020
 * @description BadPath component for improper
 * URL path
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/components/BadPath.scss';

const BadPath = () => {
  return (
    <div className="weather-display--bad-path">
      <h1>BadPathname - Please Enter Another</h1>
    </div>
  );
};

BadPath.propTypes = {
  dailyIndex: PropTypes.object,
  formatTime: PropTypes.func,
  weatherIcon: PropTypes.func,
  toggleModal: PropTypes.func,
};

export default BadPath;
