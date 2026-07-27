import React from 'react';

import { FeedFooterInfo } from '../../../src/screens/home/components/FeedFooterInfo';
import { render, textContents } from '../../../test-utils/render';

test('FeedFooterInfo renders the creator and description', () => {
  const renderer = render(
    <FeedFooterInfo name="@creator" description="A short description" />,
  );

  expect(textContents(renderer)).toEqual([
    '@creator',
    'A short description',
  ]);
});
