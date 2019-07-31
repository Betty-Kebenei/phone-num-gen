import React from 'react';
import renderer from 'react-test-renderer';

import FormForGeneration from '../FormForGeneration';

test('header component renders correctly', () => {
  const component = renderer.create(<FormForGeneration />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
