import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

export const act = ReactTestRenderer.act;

export function render(element: React.ReactElement) {
  let renderer: ReactTestRenderer.ReactTestRenderer | undefined;

  act(() => {
    renderer = ReactTestRenderer.create(element);
  });

  return renderer as ReactTestRenderer.ReactTestRenderer;
}

export function textContents(renderer: ReactTestRenderer.ReactTestRenderer) {
  return renderer.root
    .findAllByType(require('react-native').Text)
    .map(node => node.props.children);
}
