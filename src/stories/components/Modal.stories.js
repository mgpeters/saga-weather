import React from 'react';

import Modal from '../../ui/components/Modal.jsx';

// import styles from '../styles/components/Day.scss';
import {
  weatherIcon,
  getDate,
  formatHours,
  titleCase,
} from '../dummy/functions';
import dummyData from '../dummy/successfulFetch';

export default {
  title: 'Components/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />;

export const Populated = Template.bind({});
Populated.args = {
  currentDate: getDate,
  formatTime: formatHours,
  weatherIcon,
  toggleModal: () => console.log('Modal Toggled'),
  dailyDate: getDate,
  titleCase,
  dailyIndex: dummyData.weatherData.daily[0],
};
