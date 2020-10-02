/**
 * ************************************
 *
 * @module  SideNav.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Weather application Side Navigation
 * component
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LocationNavButton from '../components/LocationNavButton.jsx';
import ExpandButton from '../components/ExpandButton.jsx';

import styles from '../../styles/containers/SideNav.scss';
import * as actions from '../../state/actions/actions';

const mapStateToProps = (store) => ({
  currentLocation: store.currentLocation,
  locations: store.locations,
});

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (location) => {
    dispatch(actions.getWeather(location));
  },
  updateLocation: () => {
    dispatch(actions.updateLocation());
  },
});

class SideNav extends Component {
  componentDidMount() {
    // this.props.fetchWeather('newyork');
  }

  componentDidUpdate() {
    document.title = this.props.currentLocation;
  }

  toggleNavExpansion() {}

  render() {
    return (
      <nav className="navbar">
        <h1>Select A Location</h1>
        <div className="navbar--location-list">
          {this.props.locations.map((location) => (
            <LocationNavButton
              key={`${location}-key`}
              locationName={location}
            />
          ))}
        </div>
        <div className="navbar--expand-button">
          <ExpandButton />
        </div>
      </nav>
    );
  }
}

SideNav.propTypes = {
  currentLocation: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
