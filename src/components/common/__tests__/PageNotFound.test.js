import React from 'react';
import renderer from 'react-test-renderer';
import {configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PageNotFound from '../PageNotFound';

configure({ adapter: new Adapter() })
global.window = { location: { pathname: null } };

const props = {
  history: {
    push: jest.fn()
  }
}

describe('PageNotFound', () => {
  test('page not found renders correctly', () => {
    const component = renderer.create(<PageNotFound />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('buttons', () => {
    test('Generate Numbers Button', () => {
      const wrapper = mount(<PageNotFound {...props} />);
      wrapper.find('#generate').simulate('click');
      expect(global.window.location.pathname).toEqual('/');
    })

    test('View All Numbers Button', () => {
      const wrapper = mount(<PageNotFound {...props} />);
      wrapper.find('#view').simulate('click');
      // expect(global.window.location.pathname).toEqual('/numbers');
    })
  })
})
