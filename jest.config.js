module.exports = {
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.tsx?$': [
      'esbuild-jest',
      {
        sourcemap: true,
        loaders: {
          '.spec.ts': 'tsx',
        },
      },
    ],
  },
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
  modulePathIgnorePatterns: ['<rootDir>/.build/'],
  moduleNameMapper: {
    '~/models/(.*)': '<rootDir>/src/models/$1',
    '~/repositories/(.*)': '<rootDir>/src/repositories/$1',
    '~/services/(.*)': '<rootDir>/src/services/$1',
    '~/utils/(.*)': '<rootDir>/src/utils/$1',
  },
}
