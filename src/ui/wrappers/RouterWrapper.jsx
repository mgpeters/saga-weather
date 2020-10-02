/**
 * ************************************
 *
 * @module  RouterWrapper.jsx
 * @author  mpeters
 * @date    10/01/2020
 * @description RouterWrapper.js is a helper HOC for the application
 * and Storybook stories that rely on react-router.
 *
 * Because Storybook presents our components
 * in isolation, there can be problems recreating some of
 * the functionality that our App might provide at a high-level.
 * This wrapper, used as a decorator resolves these issues
 *
 * ************************************
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const RouterWrapper = ({ children }) => <Router>{children}</Router>;

export default RouterWrapper;
