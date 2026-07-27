import React from 'react';

import { FeedActions } from '../../../src/screens/home/components/FeedActions';
import { render, textContents } from '../../../test-utils/render';

test('FeedActions renders likes, comments and bookmarks', () => {
  const renderer = render(
    <FeedActions
      likes={1200}
      comments={25}
      liked={false}
      likeButton={jest.fn()}
    />,
  );

  const values = textContents(renderer).filter(value =>
    ['1.2k', '25'].includes(String(value)),
  );

  expect(values).toEqual(['1.2k', '25', '25']);
});

test('FeedActions delegates the like action', () => {
  const likeButton = jest.fn();
  const renderer = render(
    <FeedActions likes={1} comments={2} liked={false} likeButton={likeButton} />,
  );
  const action = renderer.root.findAll(
    node => typeof node.props.onPress === 'function',
  )[0];

  action.props.onPress();
  expect(likeButton).toHaveBeenCalledTimes(1);
});
