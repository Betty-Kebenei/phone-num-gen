import React from 'react';
import renderer from 'react-test-renderer';
import {configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon'

import Header from '../Header';

configure({ adapter: new Adapter() })
window.alert = jest.fn();

describe('Header', () => {
  test('header component renders correctly', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('handleSubmit: search when localstorage has content', () => {
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
      "0246821435"]

    test('existing number found if searched', async() => {
      localStorage.setItem('phonenumbers', JSON.stringify(arr));
      const wrapper = mount(<Header />);
      wrapper.setState({number: '0246821435'});
      const renderedComponent = wrapper.instance();
      sinon.spy(renderedComponent, 'handleSubmit');
      await renderedComponent.handleSubmit({preventDefault: () => {}});
      expect(window.alert).toHaveBeenCalledWith('Cheers!!! That number exists!')
      expect(wrapper.state().number).toEqual('');
    })

    test('non-existing number not found if searched', async() => {
      localStorage.setItem('phonenumbers', JSON.stringify(arr));
      const wrapper = mount(<Header />);
      wrapper.setState({number: '0987654320'});
      const renderedComponent = wrapper.instance();
      sinon.spy(renderedComponent, 'handleSubmit');
      await renderedComponent.handleSubmit({preventDefault: () => {}});
      expect(window.alert).toHaveBeenCalledWith('We are sorry!!! That number DOES NOT exists!')
      expect(wrapper.state().number).toEqual('');
    })
  })

  describe('handleSubmit: search when localstorage has no content', () => {
    test('nothing is searched', () => {
      localStorage.clear();
      const wrapper = mount(<Header />);
      wrapper.setState({number: ''});
      wrapper.find('[name="search"]').simulate('change', {target: {name: 'search', value: '0987654320'}});
      const renderedComponent = wrapper.instance();
      sinon.spy(renderedComponent, 'handleSubmit');
      renderedComponent.handleSubmit({preventDefault: () => {}});
      expect(window.alert).toHaveBeenCalledWith('We are sorry!!! You have no numbers to search!')
      expect(wrapper.state().number).toEqual('');
    })
  })
})
