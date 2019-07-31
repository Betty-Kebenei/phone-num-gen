import React from 'react';
import renderer from 'react-test-renderer';

import PhoneNumbers from '../PhoneNumbers';

test('phonenumber component renders correctly', () => {
  const component = renderer.create(<PhoneNumbers />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
