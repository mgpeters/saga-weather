/**
 * ************************************
 *
 * @module  index.js
 * @author  mpeters
 * @date    09/29/2020
 * @description Weather application root
 * react-dom rendering component
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

import styles from './styles/styles.scss';

render(<App />, document.getElementById('root'));
