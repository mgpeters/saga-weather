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
import { Provider } from 'react-redux';

import App from './components/App.jsx';
import store from './state/store';

import styles from './styles/styles.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
