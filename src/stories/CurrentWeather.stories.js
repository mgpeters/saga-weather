import React from 'react';
import PropTypes from 'prop-types';

import CurrentWeather from '../ui/components/CurrentWeather.jsx';

import styles from '../styles/components/CurrentWeather.scss';

export default {
  title: 'Components/CurrentWeather',
  component: CurrentWeather,
};

const Template = (args) => <CurrentWeather {...args} />;

export const Populated = Template.bind({});
Populated.args = {};

CurrentWeather.propTypes = {
  currentWeather: PropTypes.object,
  currentDate: PropTypes.func,
  formatTime: PropTypes.func,
  weatherIcon: PropTypes.func,
};
