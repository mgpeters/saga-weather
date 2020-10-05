import React from 'react';

import ExpandButton from '../ui/components/ExpandButton.jsx';

export default {
  title: 'Components/ExpandButton',
  component: ExpandButton,
};

const Template = (args) => <ExpandButton {...args} />;

export const SuccessfulFetch = Template.bind({});
SuccessfulFetch.args = {
  toggle: () => console.log('toggled'),
};
