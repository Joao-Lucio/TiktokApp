import React from 'react';
import { Text } from 'react-native';

import { Search } from '../../src/screens/search';
import { render } from '../../test-utils/render';

test('Search screen renders its title', () => {
  const renderer = render(<Search />);

  expect(renderer.root.findByType(Text).props.children).toBe('Search');
});
