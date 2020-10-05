import React from 'react';

import Hourly from '../ui/components/Hourly.jsx';

import { weatherIcon, formatHours } from './dummy/functions';
import dummyData from './dummy/successfulFetch';

const { dt, temp } = dummyData.weatherData.hourly[0];
const { icon, main } = dummyData.weatherData.hourly[0].weather[0];

export default {
  title: 'Components/Hourly',
  component: Hourly,
};

const Template = (args) => <Hourly {...args} />;

export const SuccessfulFetch = Template.bind({});
SuccessfulFetch.args = {
  main,
  temp,
  time: formatHours(dt),
  weatherIcon: weatherIcon(icon),
};
