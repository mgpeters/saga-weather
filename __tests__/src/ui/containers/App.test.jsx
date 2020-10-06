import React from 'react';
import { shallow } from 'enzyme';

import App from '../../../../src/ui/containers/App.jsx';

describe('App container', () => {
  const wrapper = shallow(<App />);

  it('matches previous snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a 1 section', () => {
    const section = wrapper.find('section');
    expect(section).toHaveLength(1);
  });
});
