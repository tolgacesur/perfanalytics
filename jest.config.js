module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    setupFiles: ["<rootDir>/tests/setup-tests.ts"],
    testMatch: ["<rootDir>/tests/**/*.test.ts"]
};