import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProviderWrapper from '../ui/wrappers/ProviderWrapper.jsx';

import store from '../state/store';

import DailyDisplay from '../ui/components/DailyDisplay.jsx';

import { weatherIcon, getDate } from './dummy/functions';
import dummyData from './dummy/successfulFetch';

// Decorator for redux and react-router
const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Router>{story()}</Router>
  </ProviderWrapper>
);

export default {
  title: 'Components/DailyDisplay',
  component: DailyDisplay,
  decorators: [withProvider],
};

const Template = (args) => <DailyDisplay {...args} />;

export const SuccessfulFetch = Template.bind({});
SuccessfulFetch.args = {
  weatherIcon,
  dailyDate: getDate,
  daily: dummyData.weatherData.daily,
};
