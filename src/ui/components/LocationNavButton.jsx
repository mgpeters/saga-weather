/**
 * ************************************
 *
 * @module  LocationNavButton.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Location NavBar Buttons
 * component to select a city
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import styles from '../../styles/components/LocationNavButton.scss';

const LocationNavButton = ({
  locationName,
  onClick,
  currentPathname,
  // history,
}) => {
  const history = useHistory();
  return (
    <div className="navbar--location-list__buttons">
      <button onClick={() => history.push('/miami')}>{locationName}</button>
    </div>
  );
};

LocationNavButton.propTypes = {
  locationName: PropTypes.string,
};

export default LocationNavButton;
