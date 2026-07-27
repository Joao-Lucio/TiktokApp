import React from 'react';
import { FlatList } from 'react-native';

import { Home } from '../../src/screens/home';
import { feedItems } from '../../src/constants/data';
import { render, textContents } from '../../test-utils/render';

describe('Home screen', () => {
  it('renders the feed and navigation labels', () => {
    const renderer = render(<Home />);
    const list = renderer.root.findByType(FlatList);
    const labels = textContents(renderer);

    expect(list.props.data).toEqual(feedItems);
    expect(list.props.keyExtractor(feedItems[0])).toBe('1');
    expect(labels).toContain('Seguindo');
    expect(labels.some(label => String(label).startsWith('Para'))).toBe(true);
  });
});
