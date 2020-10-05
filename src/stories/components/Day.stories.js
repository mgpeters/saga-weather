import React from 'react';

import Day from '../../ui/components/Day.jsx';

// import styles from '../styles/components/Day.scss';
import { weatherIcon, getDate } from '../dummy/functions';
import dummyData from '../dummy/successfulFetch';

const { dt } = dummyData.weatherData.daily[0];
const { day } = dummyData.weatherData.daily[0].temp;
const { icon, main } = dummyData.weatherData.daily[0].weather[0];

export default {
  title: 'Components/Day',
  component: Day,
};

const Template = (args) => <Day {...args} />;

export const SuccessfulFetch = Template.bind({});
SuccessfulFetch.args = {
  main,
  temp: day,
  index: 0,
  date: getDate(dt),
  weatherIcon: weatherIcon(icon),
};
