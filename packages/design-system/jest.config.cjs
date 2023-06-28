/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sss|styl)$': 'ts-jest',
        // '<rootDir>/node_modules/jest-css-modules',
    },

    modulePathIgnorePatterns: ['/dist/'],

    setupFilesAfterEnv: ['./tests/setup.ts', '@testing-library/jest-dom/extend-expect'],
};
