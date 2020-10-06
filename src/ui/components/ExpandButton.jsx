/**
 * ************************************
 *
 * @module  ExpandButton.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Nav bar toggle button component
 *
 * ************************************
 */

import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/components/ExpandButton.scss';

const ExpandButton = (props) => {
  return (
    <div className="navbar--location-list__toggle">
      <button
        className="navbar--location-list__toggle--btn"
        onClick={() => props.toggle()}
      >
        <h2 className="navbar--location-list__toggle--btn__text">
          <span>Locations</span>
        </h2>
      </button>
    </div>
  );
};

ExpandButton.propTypes = {
  toggle: PropTypes.func,
};

export default ExpandButton;
