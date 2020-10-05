import React from 'react';

import RefreshWeather from '../../ui/components/RefreshWeather.jsx';

import dummyData from '../dummy/successfulFetch';

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
