import { Badge } from './badge';
import { cleanup, render, screen } from '@testing-library/react';
import { TestThemeProvider } from '../theme/test-theme-provider';

describe('Badge', () => {
    it('renders badge with text', () => {
        render(
            <TestThemeProvider>
                <Badge variant="default">Test Badge</Badge>
            </TestThemeProvider>
        );

        const badge = screen.getByText('Test Badge');

        expect(badge).toBeInTheDocument();
    });
});
