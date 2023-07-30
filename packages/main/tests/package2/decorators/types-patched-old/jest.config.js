module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s?$': 'ts-jest',
  },
  setupFiles: [
    '<rootDir>/../../../setup.ts',
  ],
};