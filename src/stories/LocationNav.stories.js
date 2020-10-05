import React from 'react';
import ProviderWrapper from '../ui/wrappers/ProviderWrapper.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../state/store';

import LocationNav from '../ui/components/LocationNav.jsx';

import locations from './dummy/locationsArray';

// Decorator for redux and react-router
const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Router>{story()}</Router>
  </ProviderWrapper>
);

export default {
  title: 'Components/LocationNav',
  component: LocationNav,
  decorators: [withProvider],
};

const Template = (args) => <LocationNav {...args} />;

export const Populated = Template.bind({});
Populated.args = {
  locations,
  fetchWeather: () => console.log('weather fetched'),
  searchNewLocation: () => console.log('search new location'),
};

export const NotPopulated = Template.bind({});
NotPopulated.args = {
  locations: [],
  fetchWeather: () => console.log('weather fetched'),
  searchNewLocation: () => console.log('search new location'),
};
