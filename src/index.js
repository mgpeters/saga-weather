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
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ProviderWrapper from './ui/wrappers/ProviderWrapper.jsx';
// import RouterWrapper from './ui/wrappers/RouterWrapper.jsx';

import App from './ui/containers/App.jsx';
import store from './state/store';

import styles from './styles/styles.scss';

render(
  <ProviderWrapper store={store}>
    <Router>
      <Route path="/:location?" component={App} />
    </Router>
  </ProviderWrapper>,
  document.getElementById('root')
);
