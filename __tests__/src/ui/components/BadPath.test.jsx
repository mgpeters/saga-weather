import React from 'react';
import { shallow } from 'enzyme';

import BadPath from '../../../../src/ui/components/BadPath.jsx';

describe('BadPath component', () => {
  const wrapper = shallow(<BadPath />);

  it('matches previous snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a 1 <div>', () => {
    const div = wrapper.find('div');
    expect(div).toHaveLength(1);
  });
  it('should have a 1 <h1>', () => {
    const h1 = wrapper.find('h1');
    expect(h1).toHaveLength(1);
    expect(h1.text()).toBe('BadPathname - Please Enter Another');
  });
});
