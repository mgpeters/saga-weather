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

class Nav extends Component {
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
        <LocationNav
          locations={this.props.locations}
          updatePathname={this.props.updatePathname}
          currentPathname={this.props.currentPathname}
          history={this.props.history}
          fetchWeather={this.props.fetchWeather}
          searchNewLocation={this.props.searchNewLocation}
        />
        <ExpandButton toggle={this.props.toggleNavbar} />
      </nav>
    );
  }
}

Nav.propTypes = {
  currentLocation: PropTypes.string,
  locations: PropTypes.arrayOf(PropTypes.array),
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
