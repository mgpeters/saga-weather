import React from 'react';
import ProviderWrapper from '../ui/wrappers/ProviderWrapper.jsx';

import store from '../state/store';

import App from '../ui/containers/App';

// Decorator for redux and react-router
const withProvider = (story) => (
  <ProviderWrapper store={store}>{story()}</ProviderWrapper>
);

export default {
  title: 'Containers/App',
  component: App,
  decorators: [withProvider],
};

const Template = (args) => <App {...args} />;

export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   ...HeaderStories.LoggedIn.args,
// };

export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };
