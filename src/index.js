/**
 * ************************************
 *
 * @module  index.js
 * @author  mpeters
 * @date    09/29/2020
 * @description Weather application root react-dom
 * rendering component w/ redux Provider HOC
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';

import ProviderWrapper from './ui/wrappers/ProviderWrapper.jsx';

import App from './ui/containers/App.jsx';
import store from './state/store';

import styles from './styles/styles.scss';

render(
  <ProviderWrapper store={store}>
    <App />
  </ProviderWrapper>,
  document.getElementById('root')
);
