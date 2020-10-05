import React from 'react';

import CurrentWeather from '../../ui/components/CurrentWeather.jsx';

import { weatherIcon, formatHours, getDate } from '../dummy/functions';
import dummyData from '../dummy/successfulFetch';

export default {
  title: 'Components/CurrentWeather',
  component: CurrentWeather,
};

const Template = (args) => <CurrentWeather {...args} />;

export const SuccessfulFetch = Template.bind({});
SuccessfulFetch.args = {
  weatherIcon,
  formatTime: formatHours,
  currentDate: getDate,
  currentWeather: dummyData.weatherData.current,
};
