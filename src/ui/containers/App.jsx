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

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav.jsx';
import WeatherDisplay from './WeatherDisplay.jsx';

const mapStateToProps = (store) => ({
  currentLocation: store.weather.currentLocation,
});

const mapDispatchToProps = (dispatch) => ({});
class App extends Component {
  componentDidUpdate() {
    document.title = this.props.currentLocation.name;
  }
  render() {
    return (
      <section className="main-container">
        <Nav />
        <WeatherDisplay />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
