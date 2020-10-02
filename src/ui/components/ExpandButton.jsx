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

import styles from '../../styles/components/ExpandButton.scss';

import expandIcon from '../../util/images/expand-icon.png';

console.log(expandIcon);

const ExpandButton = (props) => {
  return (
    <div className="navbar--location-list__toggle">
      <button onClick={() => props.toggle()}>
        <span>Additional Locations</span>
      </button>
    </div>
  );
};

export default ExpandButton;
