import React from 'react';
import { Text } from 'react-native';

import { Profile } from '../../src/screens/profile';
import { render } from '../../test-utils/render';

test('Profile screen renders its title', () => {
  const renderer = render(<Profile />);

  expect(renderer.root.findByType(Text).props.children).toBe('Profile');
});
