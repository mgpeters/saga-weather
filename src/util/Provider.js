/**
 * ************************************
 *
 * @module  Provider.jsx
 * @author  mpeters
 * @date    10/01/2020
 * @description Because Storybook presents our components
 * in isolation, there can be problems recreating some of
 * the functionality that our App might provide at a high-level
 * Provider.js is a helper component for Storybook stories that
 * rely on redux and react-router
 *
 * ************************************
 */

import React from 'react';
// import { Router } from 'react-router';
import { Provider } from 'react-redux';

const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
);

export default ProviderWrapper;
