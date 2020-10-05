/**
 * ************************************
 *
 * @module  LocationSearch.jsx
 * @author  mpeters
 * @date    10/02/2020
 * @description Location NavBar search
 * component to select a city
 *
 * ************************************
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import styles from '../../styles/components/LocationNavButton.scss';

import {
  searchNewLocation,
  handleSearchChange,
} from '../../state/actions/actions';

const mapStateToProps = (store) => ({
  searchedLocation: store.nav.searchedLocation,
  locations: store.nav.locations,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: (input) => {
    dispatch(handleSearchChange(input));
  },
  searchNewLocation: (input) => {
    dispatch(searchNewLocation(input));
  },
});

// fx checks if we already searched location to prevent api call
const locationNotIncluded = (array, location) => {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].includes(location)) return false;
  }
  return true;
};

class LocationSearch extends Component {
  render() {
    return (
      <div className="navbar--location-search">
        <form
          onSubmit={(event) => {
            if (
              locationNotIncluded(
                this.props.locations,
                this.props.searchedLocation
              )
            ) {
              this.props.searchNewLocation(this.props.searchedLocation);
            }
            event.preventDefault();
          }}
        >
          <label htmlFor="location-search">
            Search Additional Location
            <input
              type="text"
              id="location-search"
              name="location-search"
              placeholder="City, State, Country"
              value={this.props.searchedLocation}
              onChange={(event) =>
                this.props.handleSearchChange(event.target.value)
              }
            />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

LocationSearch.propTypes = {
  searchedLocation: PropTypes.string,
  handleSearchChange: PropTypes.func,
  searchNewLocation: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);
