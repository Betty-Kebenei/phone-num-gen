import React from 'react';
import renderer from 'react-test-renderer';

import GenerateNumber from '../GenerateNumbers';

test('header component renders correctly', () => {
  const component = renderer.create(<GenerateNumber />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
