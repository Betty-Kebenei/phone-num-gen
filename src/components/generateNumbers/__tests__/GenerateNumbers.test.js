import React from 'react';
import renderer from 'react-test-renderer';
import {configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon'

import GenerateNumber from '../GenerateNumbers';

configure({ adapter: new Adapter() })

describe('GenerateNumber', () => {
  test('GenerateNumber component renders correctly', () => {
    const component = renderer.create(<GenerateNumber />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('handleSubmit', () => {
    test('generating numbers when none exists', async() => {
      localStorage.clear();
      const wrapper = mount(<GenerateNumber />);
      wrapper.setState({quantity: 0});
      wrapper.find('[name="quantity"]').simulate('change', {target: {name: 'quantity', value: 10}});
      expect(wrapper.state().quantity).toEqual(10);
      const renderedComponent = wrapper.instance();
      sinon.spy(renderedComponent, 'handleSubmit');
      await renderedComponent.handleSubmit({preventDefault: () => {}});
      expect(wrapper.state('phoneNumbers').length).toEqual(10);
    })

    test('adding numbers', async() => {
      const arr = [
        "0520824292",
        "0324483933",
        "0219081561",
        "0305923108",
        "0240259478",
        "0421493267",
        "0607632178",
        "0882948791",
        "0010663129",
        "0246821435"];
      localStorage.setItem('phonenumbers', JSON.stringify(arr))
      const wrapper = mount(<GenerateNumber />);
      wrapper.setState({quantity: 0});
      wrapper.find('[name="quantity"]').simulate('change', {target: {name: 'quantity', value: 10}});
      expect(wrapper.state().quantity).toEqual(10);
      const renderedComponent = wrapper.instance();
      sinon.spy(renderedComponent, 'handleSubmit');
      await renderedComponent.handleSubmit({preventDefault: () => {}});
      expect(wrapper.state('phoneNumbers').length).toEqual(10);
      const newList = localStorage.getItem('phonenumbers');
      expect(JSON.parse(newList).length).toEqual(20);
    })
  })

  describe('addToLocalStorage', () => {
    test('adding to localstorage', () => {
      const wrapper = mount(<GenerateNumber />);
      const renderedComponent = wrapper.instance();
      sinon.spy(renderedComponent, 'addToLocalStorage');
      renderedComponent.addToLocalStorage('021735551');
      expect(wrapper.state('phoneNumbers').length).toEqual(1);
    })
  })

})

