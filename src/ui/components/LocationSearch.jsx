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
import * as actions from '../../state/actions/actions';

const mapStateToProps = (store) => ({
  searchedLocation: store.nav.searchedLocation,
});

const mapDispatchToProps = (dispatch) => ({
  searchLocation: (input) => {
    dispatch(actions.handleSearchChange(input));
  },
});

class LocationSearch extends Component {
  // constructor(props) {
  //   // super(props);
  //   // this.handleChange = this.handleChange.bind(this);
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  //   this.searchLocation = this.searchLocation.bind(this);
  // }

  // handleChange(event, props) {
  //   console.log(props);
  //   console.log(event.target.value);
  //   // this.setState({ value: event.target.value });
  //   this.props.searchLocation(event.target.value);
  // }

  handleSubmit(event) {
    // alert(`A name was submitted: ${this.state.value}`);
    console.log('submitted');
    event.preventDefault();
  }

  render() {
    console.log(this.props);
    return (
      <div className="navbar--location-search">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="location-search">
            Search Additional Location
            <input
              type="text"
              id="location-search"
              name="location-search"
              placeholder="Location, City"
              value={this.props.searchedLocation}
              onChange={(event) =>
                this.props.searchLocation(event.target.value)
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
