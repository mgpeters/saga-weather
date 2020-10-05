import React from 'react';
import { shallow } from 'enzyme';
// import configureStore from 'redux-mock-store';
import App from '../../../../../src/ui/containers/App.jsx';
// import Adapter from 'enzyme-adapter-react-16';
// const mockStore = configureStore([]);

describe('App container', () => {
  // const store = mockStore({
  //   yaml: {
  //     fetchedContent: true,
  //     sections: { byId: []},
  //   }
  // });

  const wrapper = shallow(<App />).find('App');

  it('matches previous snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Nav component', () => {
    const hero = wrapper.find('Nav');
    expect(hero).toHaveLength(1);
  });
});
