import { Badge } from './badge';
import { cleanup, render, screen } from '@testing-library/react';
import { commonTheme } from '../theme/common-theme';

describe('Badge', () => {
    it('renders badge with text', () => {
        render(<Badge variant="default">Test Badge</Badge>);

        const badge = screen.getByText('Test Badge');

        expect(badge).toBeInTheDocument();
    });
});
