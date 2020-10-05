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

import LocationNav from '../components/LocationNav.jsx';
import ExpandButton from '../components/ExpandButton.jsx';

import styles from '../../styles/containers/Nav.scss';
import * as actions from '../../state/actions/actions';

const mapStateToProps = (store, ownProps) => ({
  locations: store.nav.locations,
  navBarExpanded: store.nav.navBarExpanded,
  // currentPathname: ownProps.location.pathname,
  history: ownProps.history,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: () => {
    dispatch(actions.toggleNavbar());
  },
  updatePathname: (pathname) => {
    dispatch(actions.updatePathname(pathname));
  },
  fetchWeather: (location) => {
    dispatch(actions.getWeather(location));
  },
  searchNewLocation: (input) => {
    dispatch(actions.searchNewLocation(input));
  },
});

const Nav = (props) => {
  // weird rendering bug when fx comp
  // componentDidMount() {
  //   // this.props.fetchWeather('newyork');
  // }

  // componentDidUpdate() {}

  // render() {
  return (
    <nav
      className="navbar"
      style={{ width: props.navBarExpanded ? '300px' : '30px' }}
    >
      <LocationNav
        locations={props.locations}
        updatePathname={props.updatePathname}
        currentPathname={props.currentPathname}
        history={props.history}
        fetchWeather={props.fetchWeather}
        searchNewLocation={props.searchNewLocation}
      />
      <ExpandButton toggle={props.toggleNavbar} />
    </nav>
  );
  // }
};

Nav.propTypes = {
  currentLocation: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.array),
  // Add addtl
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
