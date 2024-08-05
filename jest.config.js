// jest.config.js
module.exports = {
    preset: 'react-native',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
