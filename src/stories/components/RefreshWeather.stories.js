import React from 'react';

import RefreshWeather from '../../ui/components/RefreshWeather.jsx';

// import styles from '../styles/components/Day.scss';
// import { weatherIcon, getDate } from './dummy/functions';
import dummyData from '../dummy/successfulFetch';

// const { dt } = dummyData.weatherData.daily[0];
// const { day } = dummyData.weatherData.daily[0].temp;
// const { icon, main } = dummyData.weatherData.daily[0].weather[0];

export default {
  title: 'Components/RefreshWeather',
  component: RefreshWeather,
};

const Template = (args) => <RefreshWeather {...args} />;

export const SuccessfulFetch = Template.bind({});
SuccessfulFetch.args = {
  fetchWeather: () => console.log('Weather Fetched'),
  currentLocation: dummyData,
};
