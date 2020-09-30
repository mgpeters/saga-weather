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

import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
// IMPORT API??

function* fetchData(action) {
  try {
    // const location = yield call();
    console.log('saga fx fired');
    yield put({ type: 'FETCHED_WEATHER_SUCCEEDED', location });
  } catch (error) {
    yield put({ type: 'FETCHED_WEATHER_FAILED', message: error.message });
  }
}

export default function* mySaga() {
  console.log('saga fired');
  yield takeEvery('FETCHED_WEATHER', fetchData);
}
