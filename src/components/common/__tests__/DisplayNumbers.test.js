import React from 'react';
import renderer from 'react-test-renderer';

import DisplayNumbers from '../DisplayNumbers';

const props = {
  numbers: []
}
test('DisplayNumbers component renders correctly', () => {
  const component = renderer.create(<DisplayNumbers  {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
