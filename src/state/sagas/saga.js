/**
 * ************************************
 *
 * @module  saga.js
 * @author  mpeters
 * @date    09/30/2020
 * @description Redux-saga middleware
 *
 * ************************************
 */

// gets rid of regeneratorRuntime is not defined error in console
import 'regenerator-runtime/runtime';

import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import * as types from '../constants/actionTypes';
import locations from '../../util/locations';
import api from '../../util/apiKeys';

// Please input your own OpenWeatherAPI key here or import
// from a secure and git ignored module named 'apiKeys' in
// utils dir
const apiKey = api ? api.openWeatherMap : undefined; // add key in place of 'undefined'

function* fetchData(action) {
  console.log('detchdata test fired', action);
  const { name, state, country, coord } = locations[action.payload]
    ? locations[action.payload]
    : action.newLocationObj;

  const keyName = name.replace(/\s/g, '').toLowerCase();

  const locationData = {
    keyName,
    name,
    state,
    country,
  };

  try {
    const data = yield fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=imperial&exclude=minutely,alerts&appid=${apiKey}`
    ).then((response) => response.json());

    yield (locationData.weatherData = data);

    console.log(locationData);

    yield put({ type: types.FETCH_WEATHER_SUCCEEDED, locationData });
  } catch (error) {
    yield put({ type: types.FETCH_WEATHER_FAILED, message: error.message });
  }
}

function* fetchNewLocationData(action) {
  const normalizedLocationString = action.payload.replace(/\s/g, '');
  const locationNameArray = normalizedLocationString.split(',');

  const newLocationObj = {
    name: locationNameArray[0],
    state: locationNameArray[1],
    country: locationNameArray[2],
  };

  try {
    const data = yield fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${normalizedLocationString}&appid=${apiKey}`
    ).then((response) => response.json());

    yield (newLocationObj.coord = data.coord);
    yield (newLocationObj.id = data.id);

    yield put({ type: types.FETCH_WEATHER_BY_LOCATION, newLocationObj });
  } catch (error) {
    yield put({ type: types.FETCH_WEATHER_FAILED, message: error.message });
  }
}

function* fetchDataSaga() {
  yield takeEvery(types.FETCH_WEATHER_BY_LOCATION, fetchData);
}

function* fetchNewLocationLatLon() {
  yield takeEvery(types.SEARCH_NEW_LOCATION, fetchNewLocationData);
}

export default function* rootSaga() {
  yield all([fetchDataSaga(), fetchNewLocationLatLon()]);
}
