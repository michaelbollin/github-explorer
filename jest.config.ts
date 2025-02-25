import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/src/__tests__/e2e/',
    '<rootDir>/src/__tests__/mocks/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/__tests__/setup/'
  ]
}

export default createJestConfig(customJestConfig) 