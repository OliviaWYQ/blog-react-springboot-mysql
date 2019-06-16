module.exports = {
  verbose: true,
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testRegex: '/__tests__/.*\\.(test|spec)\\.jsx?$',
  testPathIgnorePatterns: [
    'node_modules'
  ],
  coveragePathIgnorePatterns: [
    'node_modules'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  /* JSDom 11.12 causes SecurityError: localStorage is not available for opaque origins */
  testURL: 'http://localhost:8081',
  globals: {}
};
