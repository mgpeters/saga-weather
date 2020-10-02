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

const mapStateToProps = (store) => ({
  locations: store.nav.locations,
  navBarExpanded: store.nav.navBarExpanded,
});

const mapDispatchToProps = (dispatch) => ({
  toggleNavbar: () => {
    dispatch(actions.toggleNavbar());
  },
});

class SideNav extends Component {
  componentDidMount() {
    // this.props.fetchWeather('newyork');
  }

  componentDidUpdate() {}

  render() {
    return (
      <nav
        className="navbar"
        style={{ width: this.props.navBarExpanded ? '300px' : '30px' }}
      >
        <LocationNav locations={this.props.locations} />
        <ExpandButton toggle={this.props.toggleNavbar} />
      </nav>
    );
  }
}

SideNav.propTypes = {
  currentLocation: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.string),
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
