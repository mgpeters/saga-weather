import React from 'react';

import Loading from '../../ui/components/Loading.jsx';

// import styles from '../styles/components/BadPath.scss';

export default {
  title: 'Components/Loading',
  component: Loading,
};

const Template = (args) => <Loading {...args} />;

export const Stateless = Template.bind({});
