import React from 'react';
import { Text } from 'react-native';

import { NewFeed } from '../../src/screens/newFeed';
import { render } from '../../test-utils/render';

test('NewFeed screen renders its title', () => {
  const renderer = render(<NewFeed />);

  expect(renderer.root.findByType(Text).props.children).toBe('NewFeed');
});
