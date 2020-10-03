/**
 * ************************************
 *
 * @module  WeatherDisplay.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Weather application Weather Data
 * Display component
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../../styles/containers/App.scss';
import * as actions from '../../state/actions/actions';

const mapStateToProps = (store) => ({
  currentLocation: store.currentLocation,
  locations: store.locations,
  locationData: store.locationData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (location) => {
    dispatch(actions.getWeather(location));
  },
  updateLocation: () => {
    dispatch(actions.updateLocation());
  },
});

class WeatherDisplay extends Component {
  componentDidMount() {
    this.props.fetchWeather('newyork');
  }

  componentDidUpdate() {
    document.title = this.props.currentLocation;
  }

  render() {
    return (
      <section>
        <h1>WORKING</h1>
      </section>
    );
  }
}

WeatherDisplay.propTypes = {
  currentLocation: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.string),
  locationData: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);
