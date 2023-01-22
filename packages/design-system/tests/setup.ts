import { cleanup } from '@testing-library/react';

afterEach(() => {
    // Cleanup render after each test has completed
    cleanup();
});
