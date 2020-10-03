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

import LocationTitle from '../components/LocationTitle.jsx';
import CurrentWeather from '../components/CurrentWeather.jsx';

import styles from '../../styles/containers/App.scss';
import * as actions from '../../state/actions/actions';

const mapStateToProps = (store) => ({
  currentLocation: store.weather.currentLocation,
  locations: store.weather.locations,
  locationData: store.weather.locationData,
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
    // this.props.fetchWeather('miami');
    // this.props.fetchWeather('losangeles');
  }

  componentDidUpdate() {
    // document.title = this.props.currentLocation;
  }

  render() {
    return (
      <section>
        <LocationTitle currentLocation={this.props.currentLocation} />
        {/*<CurrentWeather
          currentWeather={
            this.props.locationData.newyorkcity.weatherData.current
              ? this.props.locationData.newyorkcity.weatherData.current
              : {}
          } */}
        />
      </section>
    );
  }
}

WeatherDisplay.propTypes = {
  currentLocation: PropTypes.object,
  locations: PropTypes.arrayOf(PropTypes.string),
  locationData: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);
