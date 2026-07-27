const React = require('react');
const { View } = require('react-native');

function MockVideo(props) {
  return React.createElement(View, {
    ...props,
    testID: 'mock-video',
  });
}

module.exports = {
  __esModule: true,
  default: MockVideo,
  ResizeMode: { CONTAIN: 'contain' },
};
