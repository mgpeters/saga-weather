import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProviderWrapper from '../../ui/wrappers/ProviderWrapper.jsx';

import store from '../../state/store';

import LocationSearch from '../../ui/components/LocationSearch.jsx';

import locations from '../dummy/locationsArray';

// Decorator for redux and react-router
const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Router>{story()}</Router>
  </ProviderWrapper>
);

export default {
  title: 'Components/LocationSearch',
  component: LocationSearch,
  decorators: [withProvider],
};

const Template = (args) => <LocationSearch {...args} />;

export const SearchPopulated = Template.bind({});
SearchPopulated.args = {
  searchedLocation: 'New York City, NY, US',
  locations,
  handleSearchChange: () => console.log('search change handled'),
  searchNewLocation: () => console.log('search new location'),
};

export const SearchEmpty = Template.bind({});
SearchEmpty.args = {
  searchedLocation: '',
  locations,
  handleSearchChange: () => console.log('search change handled'),
  searchNewLocation: () => console.log('search new location'),
};
