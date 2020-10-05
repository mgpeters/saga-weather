import React from 'react';

import BadPath from '../../ui/components/BadPath.jsx';

// import styles from '../styles/components/BadPath.scss';

export default {
  title: 'Components/BadPath',
  component: BadPath,
};

const Template = (args) => <BadPath {...args} />;

export const Stateless = Template.bind({});
