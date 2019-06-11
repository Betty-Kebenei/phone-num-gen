import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../header';

test('header component renders correctly', () => {
  const component = renderer.create(<Header />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
