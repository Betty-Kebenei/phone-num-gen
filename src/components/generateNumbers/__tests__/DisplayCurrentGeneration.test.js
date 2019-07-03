import React from 'react';
import renderer from 'react-test-renderer';

import DisplayCurrentGeneration from '../DisplayCurrentGeneration';

const props = {
  currentGeneration: []
}
test('header component renders correctly', () => {
  const component = renderer.create(<DisplayCurrentGeneration  {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
