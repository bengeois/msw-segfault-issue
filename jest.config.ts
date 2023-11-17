import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

export default {
  preset: 'ts-jest',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  clearMocks: true,
  collectCoverage: true,
  resetMocks: true,
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  reporters: ['default', ['jest-junit', { suiteName: 'report unit-tests' }]],
  setupFilesAfterEnv: ['<rootDir>/test/config/setup-env.ts'],
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
  testPathIgnorePatterns: ['node_modules', 'cdk.out'],
  globalSetup: './test/config/jest-global-setup.ts',
};
