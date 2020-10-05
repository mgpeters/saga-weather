import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import WeatherDisplay from '../../../../../src/ui/containers/WeatherDisplay.jsx';

const mockStore = configureStore([]);

const store = mockStore({
  weather: {
    currentLocation: {
      weatherData: {
        current: {},
      },
    },
    modalIndex: 0,
    badPath: false,
    loading: false,
  },
});

const props = {
  pathname: '/',
};

describe('WeatherDisplay container', () => {
  const wrapper = shallow(<WeatherDisplay store={store} location={props} />)
    .find('WeatherDisplay')
    .dive();

  it('matches previous snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a 1 <section /> section', () => {
    const section = wrapper.find('section');
    expect(section).toHaveLength(1);
  });
});
