import React from 'react';

import { ButtonNew } from '../../../src/routes/components/BottomNew';
import { colors } from '../../../src/theme';
import { render } from '../../../test-utils/render';

test('ButtonNew renders the plus icon with the provided size', () => {
  const renderer = render(<ButtonNew size={24} />);
  const plusIcon = renderer.root.findByProps({ children: 'plus' });

  expect(plusIcon.props.size).toBe(24);
  expect(plusIcon.props.color).toBe(colors.onSurface);
});
