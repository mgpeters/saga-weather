/**
 * ************************************
 *
 * @module  ProviderWrapper.jsx
 * @author  mpeters
 * @date    10/01/2020
 * @description ProviderWrapper.js is a helper HOC for the application
 * and Storybook stories that rely on redux.
 *
 * Because Storybook presents our components
 * in isolation, there can be problems recreating some of
 * the functionality that our App might provide at a high-level.
 * This wrapper, used as a decorator resolves these issues
 *
 * ************************************
 */

import React from 'react';
import { Provider } from 'react-redux';

const ProviderWrapper = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
);

export default ProviderWrapper;
