import React from 'react';

import { FeedItem } from '../../../src/screens/home/components/FeedItem';
import { feedItems } from '../../../src/constants/data';
import { colors } from '../../../src/theme';
import { act, render } from '../../../test-utils/render';

test('FeedItem plays the visible item and toggles playback', () => {
  const renderer = render(
    <FeedItem data={feedItems[0]} currentVisibleItem={feedItems[0]} />,
  );

  expect(renderer.root.findByProps({ testID: 'mock-video' }).props.paused).toBe(
    false,
  );

  const playbackButton = renderer.root.findByProps({
    accessibilityLabel: 'Pausar vídeo',
  });
  act(() => {
    playbackButton.props.onPress();
  });

  expect(
    renderer.root.findByProps({ accessibilityLabel: 'Reproduzir vídeo' }),
  ).toBeDefined();
});

test('FeedItem toggles the liked state', () => {
  const renderer = render(
    <FeedItem data={feedItems[0]} currentVisibleItem={feedItems[0]} />,
  );
  const heartIcon = () => renderer.root.findByProps({ children: 'heart' });
  const likeButton = renderer.root.findAll(
    node => typeof node.props.onPress === 'function',
  )[0];

  expect(heartIcon().props.color).toBe(colors.foreground);
  act(() => {
    likeButton.props.onPress();
  });
  expect(heartIcon().props.color).toBe(colors.liked);
});
