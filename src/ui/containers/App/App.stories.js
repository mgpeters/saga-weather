import React from 'react';
import Provider from '../../../util/Provider';

import store from '../../../state/store';

import App from './App.jsx';

const withProvider = (story) => <Provider store={store}>{story()}</Provider>;

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
