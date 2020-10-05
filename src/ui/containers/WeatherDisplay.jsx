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

import defaultLocations from '../../util/locations';

import LocationTitle from '../components/LocationTitle.jsx';
import CurrentWeather from '../components/CurrentWeather.jsx';
import HourlyDisplay from '../components/HourlyDisplay.jsx';
import DailyDisplay from '../components/DailyDisplay.jsx';
import Loading from '../components/Loading.jsx';
import RefreshWeather from '../components/RefreshWeather.jsx';
import Modal from '../components/Modal.jsx';

import styles from '../../styles/containers/WeatherDisplay.scss';

import {
  getWeather,
  updateLocation,
  toggleModal,
  badPath,
} from '../../state/actions/actions';

const mapStateToProps = (store, ownProps) => ({
  currentLocation: store.weather.currentLocation,
  // locations: store.weather.locations,
  // locationData: store.weather.locationData,
  showModal: store.weather.showModal,
  currentPathname: ownProps.location.pathname,
  // pathname: store.nav.pathname,
  modalIndex: store.weather.modalIndex,
  badPath: store.weather.badPath,
  loading: store.weather.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (location) => {
    dispatch(getWeather(location));
  },
  updateLocation: (location) => {
    dispatch(updateLocation(location));
  },
  toggleModal: (index) => {
    dispatch(toggleModal(index));
  },
  badPathToggle: () => {
    dispatch(badPath());
  },
  // updatePathname: (pathname) => {
  //   dispatch(actions.updatePathname(pathname));
  // },
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

const titleCase = (str) => {
  const splitStr = str.toLowerCase().split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
};

const normalizePathname = (pathname) =>
  pathname.replace(/\//g, '').toLowerCase();

class WeatherDisplay extends Component {
  componentDidMount() {
    // this.props.updatePathname(this.props.currentPathname);

    const locationKeyName = normalizePathname(this.props.currentPathname);

    // Default loads to NYC, another URL param will relocate to another
    // default location
    if (this.props.currentPathname === '/') {
      this.props.fetchWeather('newyorkcity');
    } else if (defaultLocations[locationKeyName]) {
      this.props.fetchWeather(locationKeyName);
    } else {
      this.props.badPathToggle();
    }
  }

  componentDidUpdate() {
    if (this.props.currentLocation) {
      document.title = this.props.currentLocation.name;
    }
  }

  render() {
    let loadingOrBadPath;
    if (this.props.badPath) {
      loadingOrBadPath = <h1>BadPath - Please Enter Another</h1>;
    } else {
      loadingOrBadPath = <Loading />;
    }

    return this.props.currentLocation ? (
      <section className="weather-display">
        <LocationTitle currentLocation={this.props.currentLocation} />
        <CurrentWeather
          currentDate={getDate}
          formatTime={formatHours}
          currentWeather={this.props.currentLocation.weatherData.current}
          weatherIcon={weatherIcon}
        />
        <RefreshWeather
          keyName={this.props.currentLocation.keyName}
          currentLocation={this.props.currentLocation}
          fetchWeather={this.props.fetchWeather}
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
          toggleModal={this.props.toggleModal}
        />
        {this.props.showModal ? (
          <Modal
            currentDate={getDate}
            formatTime={formatHours}
            weatherIcon={weatherIcon}
            toggleModal={this.props.toggleModal}
            dailyDate={getDate}
            titleCase={titleCase}
            dailyIndex={
              this.props.currentLocation.weatherData.daily[
                this.props.modalIndex
              ]
            }
          />
        ) : null}
      </section>
    ) : (
      loadingOrBadPath
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
