import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import sinon from 'sinon'
import Adapter from 'enzyme-adapter-react-16';

import DisplayNumbers from '../DisplayNumbers';

configure({ adapter: new Adapter() })

const props = {
  numbers: []
}

describe('DisplayNumbers', () => {
  test('DisplayNumbers component renders correctly', () => {
    const component = renderer.create(<DisplayNumbers  {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('handlePageChange', () => {
    test('active page changes', () => {
      const wrapper = mount(<DisplayNumbers {...props} />);
      const renderedComponent = wrapper.instance();
      expect(wrapper.state('activePage')).toEqual(1);
      sinon.spy(renderedComponent, 'handlePageChange');
      renderedComponent.handlePageChange(2);
      expect(wrapper.state('activePage')).toEqual(2);
    })
  })
})

