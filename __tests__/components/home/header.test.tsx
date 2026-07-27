import React from 'react';

import { HeaderHome } from '../../../src/screens/home/components/Header';
import { render, textContents } from '../../../test-utils/render';

test('HeaderHome renders the feed tabs', () => {
  const renderer = render(<HeaderHome />);
  const labels = textContents(renderer);

  expect(labels).toContain('Seguindo');
  expect(labels.some(label => String(label).startsWith('Para'))).toBe(true);
});
