/**
 * ************************************
 *
 * @module  locations.js
 * @author  mpeters
 * @date    09/29/2020
 * @description Locations object with default
 * OpenWeather API city information for
 * fetch requests
 *
 * ************************************
 */

const locations = {
  newyorkcity: {
    id: 5128581,
    name: 'New York City',
    state: 'NY',
    country: 'US',
    coord: {
      lon: -74.005966,
      lat: 40.714272,
    },
  },
  losangeles: {
    id: 5368361,
    name: 'Los Angeles',
    state: 'CA',
    country: 'US',
    coord: {
      lon: -118.243683,
      lat: 34.052231,
    },
  },
  miami: {
    id: 4164138,
    name: 'Miami',
    state: 'FL',
    country: 'US',
    coord: {
      lon: -80.193657,
      lat: 25.774269,
    },
  },
};

export default locations;
