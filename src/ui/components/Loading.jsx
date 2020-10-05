/**
 * ************************************
 *
 * @module  Loading.jsx
 * @author  mpeters
 * @date    10/03/2020
 * @description Loading icon component
 *
 * ************************************
 */

import React from 'react';

import styles from '../../styles/components/Loading.scss';
import icon from '../../util/images/loading.gif';

const Loading = () => {
  return (
    <div className="weather-display--loading-icon">
      <img src={icon} alt="loading icon"></img>
    </div>
  );
};

export default Loading;
