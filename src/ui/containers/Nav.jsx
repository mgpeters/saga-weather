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

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LocationNav from '../components/LocationNav.jsx';
import ExpandButton from '../components/ExpandButton.jsx';

import '../../styles/containers/Nav.scss';
import * as actions from '../../state/actions/actions';

const mapStateToProps = (store) => ({
  locations: store.nav.locations,
  navBarExpanded: store.nav.navBarExpanded,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: () => {
    dispatch(actions.toggleNavbar());
  },
  fetchWeather: (location) => {
    dispatch(actions.getWeather(location));
  },
  searchNewLocation: (input) => {
    dispatch(actions.searchNewLocation(input));
  },
});

const Nav = (props) => {
  return (
    <nav
      className="navbar"
      style={{ width: props.navBarExpanded ? '300px' : '50px' }}
    >
      <LocationNav
        locations={props.locations}
        fetchWeather={props.fetchWeather}
        searchNewLocation={props.searchNewLocation}
      />
      <ExpandButton toggle={props.toggleNavbar} />
    </nav>
  );
};

Nav.propTypes = {
  navBarExpanded: PropTypes.bool,
  locations: PropTypes.arrayOf(PropTypes.array),
  toggleNavbar: PropTypes.func,
  fetchWeather: PropTypes.func,
  searchNewLocation: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
