module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  verbose: false,
  testURL: 'http://localhost:8080',
  moduleFileExtensions: ['js', 'ts'],
  moduleDirectories: ['node_modules'],
  testPathIgnorePatterns: ['dist/', 'build/'],
  testMatch: ['**/?(*.)(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    '^lodash-es$': 'lodash',
    '^src/(.*)$': '<rootDir>/src/$1'
  },
  coverageDirectory: './coverage/',
  collectCoverage: true,
};
