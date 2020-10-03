/**
 * ************************************
 *
 * @module  WeatherDisplay.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Weather application Weather Data
 * Display container
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LocationTitle from '../components/LocationTitle.jsx';
import CurrentWeather from '../components/CurrentWeather.jsx';
import HourlyDisplay from '../components/HourlyDisplay.jsx';
import DailyDisplay from '../components/DailyDisplay.jsx';
import Loading from '../components/Loading.jsx';

import styles from '../../styles/containers/WeatherDisplay.scss';
import * as actions from '../../state/actions/actions';

const mapStateToProps = (store) => ({
  currentLocation: store.weather.currentLocation,
  locations: store.weather.locations,
  locationData: store.weather.locationData,
  showModal: store.weather.showModal,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (location) => {
    dispatch(actions.getWeather(location));
  },
  updateLocation: () => {
    dispatch(actions.updateLocation());
  },
  toggleModal: () => {
    dispatch(actions.toggleModal());
  },
});

const formatHours = (timestamp) => {
  const date = new Date(timestamp * 1000);
  let hours = `${date.getHours()}`;
  let minutes = `0${date.getMinutes()}`;
  const ampm = hours >= 12 ? 'pm' : 'am';

  hours %= 12;
  hours = hours || 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes.substr(-2)} ${ampm}`;
};

const getDate = (day = null, locale = 'en-US') => {
  const dayObj = {};
  const today = !day ? new Date() : new Date(day * 1000);

  dayObj.weekday = today.toLocaleDateString(locale, { weekday: 'long' });
  dayObj.day = String(today.getDate()).padStart(2, '0');
  dayObj.month = String(today.getMonth() + 1).padStart(2, '0');
  dayObj.year = today.getFullYear();
  dayObj.date = `${dayObj.month}/${dayObj.day}/${dayObj.year}`;
  dayObj.dateNoYear = `${dayObj.month}/${dayObj.day}`;
  dayObj.fullDate = `${dayObj.weekday} ${dayObj.month}/${dayObj.day}/${dayObj.year}`;

  return dayObj;
};

const weatherIcon = (icon) => {
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

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
    return this.props.currentLocation ? (
      <section className="weather-display">
        <LocationTitle currentLocation={this.props.currentLocation} />
        <CurrentWeather
          currentDate={getDate}
          formatTime={formatHours}
          currentWeather={this.props.currentLocation.weatherData.current}
          weatherIcon={weatherIcon}
        />
        <HourlyDisplay
          hourly={this.props.currentLocation.weatherData.hourly}
          formatTime={formatHours}
          weatherIcon={weatherIcon}
        />
        <DailyDisplay
          daily={this.props.currentLocation.weatherData.daily}
          dailyDate={getDate}
          formatTime={formatHours}
          weatherIcon={weatherIcon}
          openModal={this.props.toggleModal}
        />
      </section>
    ) : (
      <Loading />
    );
  }
}

WeatherDisplay.propTypes = {
  currentLocation: PropTypes.object,
  locations: PropTypes.arrayOf(PropTypes.string),
  locationData: PropTypes.object,
  showModal: PropTypes.bool,
  toggleModal: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherDisplay);
