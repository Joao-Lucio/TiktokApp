const React = require('react');
const { Text } = require('react-native');

module.exports = function MockEntypo(props) {
  return React.createElement(Text, props, props.name);
};
