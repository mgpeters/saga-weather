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

import * as actions from '../../state/actions/actions';

const mapStateToProps = (store, ownProps) => ({
  currentLocation: store.weather.currentLocation,
  currentPathname: ownProps.location.pathname,
});

const mapDispatchToProps = (dispatch) => ({
  updatePathname: (pathname) => {
    dispatch(actions.updatePathname(pathname));
  },
});
class App extends Component {
  componentDidUpdate() {
    if (this.props.currentLocation.name) {
      document.title = this.props.currentLocation.name;
    }
    this.props.updatePathname(this.props.currentPathname);
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
