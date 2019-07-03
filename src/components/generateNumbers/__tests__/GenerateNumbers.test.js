import React from 'react';
import renderer from 'react-test-renderer';
import {configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

import GenerateNumber from '../GenerateNumbers';

configure({ adapter: new Adapter() })

describe('GenerateNumber', () => {
  test('header component renders correctly', () => {
    const component = renderer.create(<GenerateNumber />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('handleSubmit', () => {
    test('quantity state gets updated', () => {
      const wrapper = mount(<GenerateNumber />);
      wrapper.setState({quantity: 0});
      wrapper.find('[name="quantity"]').simulate('change', {target: {name: 'quantity', value: 10}});
      wrapper.find('[type="submit"]').simulate('click');
      expect(wrapper.state().quantity).toEqual(10);
    })
  })

})

