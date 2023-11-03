module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@api(.*)$': '<rootDir>/src/api$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@context(.*)$': '<rootDir>/src/context$1',
    '^@domain(.*)$': '<rootDir>/src/domain$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@routes(.*)$': '<rootDir>/src/routes$1',
    '^@screens(.*)$': '<rootDir>/src/screens$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@theme(.*)$': '<rootDir>/src/theme$1',
    '^@types(.*)$': '<rootDir>/src/types$1',
    '^@utils(.*)$': '<rootDir>/src/utils$1',
    '^@useCases(.*)$': '<rootDir>/src/useCases$1',
  },
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/src/test/setup-env.ts',
  ],
  moduleDirectories: ['node_modules', './test'],
  modulePathIgnorePatterns: ['mocks', 'e2e/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: false,
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context)/)',
  ],
  collectCoverageFrom: [
    'src/{components,utils,hooks,services,screens,useCases}/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/src/assets/', '/src/theme/'],
};
