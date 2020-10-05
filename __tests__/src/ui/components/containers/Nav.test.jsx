import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Nav from '../../../../../src/ui/containers/Nav.jsx';

const mockStore = configureStore([]);

const store = mockStore({
  nav: {
    locations: [
      ['New York, NY', 'newyorkcity'],
      ['Miami, FL', 'miami'],
      ['LosAngeles, CA', 'losangeles'],
    ],
  },
});

describe('Nav container', () => {
  const wrapper = shallow(<Nav store={store} />)
    .find('Nav')
    .dive();

  it('matches previous snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a 1 <nav /> section', () => {
    const section = wrapper.find('nav');
    expect(section).toHaveLength(1);
  });
});
