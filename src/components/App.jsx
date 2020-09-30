/**
 * ************************************
 *
 * @module  App.jsx
 * @author  mpeters
 * @date    09/30/2020
 * @description Weather application root
 * component
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../state/actions/actions';

const mapStateToProps = (store) => ({
  locationData: store.locationData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchedWeather: () => {
    console.log('fetched weather fired');
    dispatch(actions.getWeather());
  },
  updateLocation: () => {
    console.log('update location fired');
    dispatch(actions.updateLocation());
  },
});

class App extends Component {
  componentDidMount() {
    this.props.fetchedWeather();
  }

  render() {
    return (
      <div>
        <h1>WORKING</h1>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
