import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ProviderWrapper from '../../ui/wrappers/ProviderWrapper.jsx';

import store from '../../state/store';

import Nav from '../../ui/containers/Nav.jsx';

// Decorator for redux and react-router
const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Router>{story()}</Router>
  </ProviderWrapper>
);

export default {
  title: 'Containers/Nav',
  component: Nav,
  decorators: [withProvider],
};

const Template = (args) => <Nav {...args} />;

export const Populated = Template.bind({});
