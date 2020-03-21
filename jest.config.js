module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: true,
  testURL: 'http://localhost:8080',
  moduleFileExtensions: ['js', 'ts'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['dist/'],
  testMatch: ['**/?(*.)(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
  },
};
