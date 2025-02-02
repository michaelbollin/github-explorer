import '@testing-library/jest-dom'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      replace: jest.fn(),
    }
  },
  useSearchParams() {
    return {
      get: () => null,
    }
  },
})) 