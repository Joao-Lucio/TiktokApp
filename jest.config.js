module.exports = {
  preset: '@react-native/jest-preset',
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|react-native-css-interop|react-native-vector-icons|nativewind)/)',
  ],
};
