import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProviderWrapper from '../../ui/wrappers/ProviderWrapper.jsx';

import store from '../../state/store';

import WeatherDisplay from '../../ui/containers/WeatherDisplay.jsx';

import dummyData from '../dummy/successfulFetch';

// Decorator for redux and react-router
const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Router>
      <Switch>
        <Route>{story()}</Route>
      </Switch>
    </Router>
  </ProviderWrapper>
);

export default {
  title: 'Containers/WeatherDisplay',
  component: WeatherDisplay,
  decorators: [withProvider],
};

const Template = (args) => <WeatherDisplay {...args} />;

export const Populated = Template.bind({});
Populated.args = {
  location: {
    pathname: '/',
  },
  currentLocation: dummyData,
};
