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
import { connect } from 'react-redux';

// import styles from '../../styles/components/LocationNavButton.scss';
import {
  searchNewLocation,
  handleSearchChange,
} from '../../state/actions/actions';

const mapStateToProps = (store) => ({
  searchedLocation: store.nav.searchedLocation,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: (input) => {
    dispatch(handleSearchChange(input));
  },
  searchNewLocation: (input) => {
    dispatch(searchNewLocation(input));
  },
});

class LocationSearch extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="navbar--location-search">
        <form
          onSubmit={(event) => {
            this.props.searchNewLocation(this.props.searchedLocation);
            event.preventDefault();
          }}
        >
          <label htmlFor="location-search">
            Search Additional Location
            <input
              type="text"
              id="location-search"
              name="location-search"
              placeholder="Location, City"
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

export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);
