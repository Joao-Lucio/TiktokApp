import React from 'react';

import { ButtonAction } from '../../../src/screens/home/components/ButtonAction';
import { colors } from '../../../src/theme';
import { render } from '../../../test-utils/render';

test('ButtonAction formats thousands and calls its action', () => {
  const onPress = jest.fn();
  const renderer = render(
    <ButtonAction iconName="heart" number={2102} onPress={onPress} />,
  );
  const action = renderer.root.find(node => typeof node.props.onPress === 'function');

  expect(renderer.root.findByProps({ children: '2.102k' })).toBeDefined();

  action.props.onPress();
  expect(onPress).toHaveBeenCalledTimes(1);
});

test('ButtonAction uses the liked color when selected', () => {
  const renderer = render(
    <ButtonAction iconName="heart" number={1} isSelected onPress={jest.fn()} />,
  );

  expect(renderer.root.findByProps({ children: 'heart' }).props.color).toBe(
    colors.liked,
  );
});
