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

// gets rid of regeneratorRuntime is not defined error
import 'regenerator-runtime/runtime';

import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
// IMPORT API??
import api from '../../util/apiKeys';

function* fetchData() {
  try {
    const data = yield fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=40.714272&lon=-74.005966&exclude=minutely,alerts&appid=${api.openWeatherMap}`
    ).then((response) => response.json());

    yield put({ type: 'FETCHED_WEATHER_SUCCEEDED', data });
  } catch (error) {
    yield put({ type: 'FETCHED_WEATHER_FAILED', message: error.message });
  }
}

function* mySaga() {
  yield takeLatest('FETCHED_WEATHER', fetchData);
}

export default function* rootSaga() {
  yield all([mySaga()]);
}
