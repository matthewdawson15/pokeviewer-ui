/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(scss)$": "<rootDir>/tests/mocks/styleMock.ts",
  },
  setupFilesAfterEnv: ["./src/tests.setup.ts"],
  testEnvironment: "jsdom",
};
