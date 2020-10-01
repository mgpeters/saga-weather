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
import api from '../../util/apiKeys';

// Please input your own OpenWeatherAPI key here or import
// from a secure and git ignored module named 'apiKeys' in
// utils dir
const apiKey = api ? api.openWeatherMap : undefined; // add key in place of 'undefined'

function* fetchData() {
  try {
    const data = yield fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=40.714272&lon=-74.005966&exclude=minutely,alerts&appid=${apiKey}`
    ).then((response) => response.json());

    yield put({ type: types.FETCH_WEATHER_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: types.FETCH_WEATHER_FAILED, message: error.message });
  }
}

function* mySaga() {
  yield takeEvery(types.FETCH_WEATHER_BY_LOCATION, fetchData);
}

export default function* rootSaga() {
  yield all([mySaga()]);
}
