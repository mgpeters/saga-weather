import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProviderWrapper from '../ui/wrappers/ProviderWrapper.jsx';

import store from '../state/store';

import HourlyDisplay from '../ui/components/HourlyDisplay.jsx';

import { weatherIcon, formatHours } from './dummy/functions';
import dummyData from './dummy/successfulFetch';

// Decorator for redux and react-router
const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Router>{story()}</Router>
  </ProviderWrapper>
);

export default {
  title: 'Components/HourlyDisplay',
  component: HourlyDisplay,
  decorators: [withProvider],
};

const Template = (args) => <HourlyDisplay {...args} />;

export const SuccessfulFetch = Template.bind({});
SuccessfulFetch.args = {
  weatherIcon,
  formatTime: formatHours,
  hourly: dummyData.weatherData.hourly,
};
