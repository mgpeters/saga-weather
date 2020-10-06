/**
 * ************************************
 *
 * @module  App.jsx
 * @author  mpeters
 * @date    09/30/2020
 * @description Weather application root
 * component
 *
 * ************************************
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './Nav.jsx';
import WeatherDisplay from './WeatherDisplay.jsx';

const App = () => {
  return (
    <section className="main-container">
      <Nav />
      <Switch>
        <Route component={WeatherDisplay} />
      </Switch>
    </section>
  );
};

export default App;
