/**
 * ************************************
 *
 * @module  ExpandButton.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Location
 * component
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../styles/components/ExpandButton.scss';

const ExpandButton = (props) => {
  return (
    <div className="navbar--location-list__toggle">
      <button onClick={() => props.toggle()}>
        <span>Locations</span>
      </button>
    </div>
  );
};

ExpandButton.propTypes = {
  toggle: PropTypes.func,
};

export default ExpandButton;
