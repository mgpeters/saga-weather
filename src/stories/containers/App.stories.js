import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProviderWrapper from '../../ui/wrappers/ProviderWrapper.jsx';

import store from '../../state/store';

import App from '../../ui/containers/App.jsx';

// Decorator for redux and react-router
const withProvider = (story) => (
  <ProviderWrapper store={store}>
    <Router>
      <Route path="/">{story()}</Route>
    </Router>
  </ProviderWrapper>
);

export default {
  title: 'Containers/App',
  component: App,
  decorators: [withProvider],
};

const Template = (args) => <App {...args} />;

export const ValidPath = Template.bind({});
// LoggedIn.args = {
//   ...HeaderStories.LoggedIn.args,
// };

export const InvalidPath = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };
