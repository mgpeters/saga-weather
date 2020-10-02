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

import SideNav from './SideNav.jsx';
import WeatherDisplay from './WeatherDisplay.jsx';

const App = () => {
  return (
    <section className="main-container">
      <SideNav />
      <WeatherDisplay />
    </section>
  );
};

export default App;
