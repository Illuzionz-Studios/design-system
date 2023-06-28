import { render, screen, within } from '@testing-library/react';
import { FaArrowLeft } from 'react-icons/fa';
import { BaseButton } from './base-button';
import { TestThemeProvider } from '../../theme/test-theme-provider';
import 'jest-styled-components';

describe('Base Button', () => {
    it('renders text', () => {
        const { getByText } = render(
            <TestThemeProvider>
                <BaseButton>Test Button</BaseButton>
            </TestThemeProvider>
        );

        const baseButton = getByText('Test Button');

        expect(baseButton).toBeInTheDocument();
    });

    it('renders icons', () => {
        render(
            <TestThemeProvider>
                <BaseButton startIcon={<FaArrowLeft />} endIcon={<FaArrowLeft />}>
                    Test Button
                </BaseButton>
            </TestThemeProvider>
        );

        const baseButton = screen.getByText('Test Button');

        // Try find svg icons and expect it to be valid
        const startIcon = baseButton.parentElement?.children[0].children[0];
        const endIcon = baseButton.parentElement?.children[2].children[0];
        expect(startIcon).toBeInTheDocument();
        expect(endIcon).toBeInTheDocument();
    });

    it('can be disabled', () => {
        // Track if has fired on click
        var isClicked = false;
        const onClick = () => {
            isClicked = true;
        };

        render(
            <TestThemeProvider>
                <BaseButton disabled={true} onClick={onClick}>
                    Test Button
                </BaseButton>
            </TestThemeProvider>
        );

        const baseButton = screen.getByText('Test Button');

        // Expect clicking disabled button to not run onClick
        baseButton.click();
        expect(isClicked).toBeFalsy();
    });
});
