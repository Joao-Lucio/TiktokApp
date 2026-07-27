import React from 'react';
import { Text } from 'react-native';

import { Inbox } from '../../src/screens/inbox';
import { render } from '../../test-utils/render';

test('Inbox screen renders its title', () => {
  const renderer = render(<Inbox />);

  expect(renderer.root.findByType(Text).props.children).toBe('Inbox');
});
