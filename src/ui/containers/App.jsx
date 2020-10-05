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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
  componentDidMount() {
    console.log('App Mounted');
  }
  componentDidUpdate() {
    console.log('App Updated');
    if (this.props.currentLocation.name) {
      document.title = this.props.currentLocation.name;
    }
    // this.props.updatePathname(this.props.currentPathname);
  }

  render() {
    return (
      <section className="main-container">
        <Route path="/:location?" component={Nav} />
        <Switch>
          <Route path="/:location?" component={WeatherDisplay} history />
        </Switch>
      </section>
    );
  }
}

App.propTypes = {
  currentLocation: PropTypes.object,
  currentPathname: PropTypes.string,
  updatePathname: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
