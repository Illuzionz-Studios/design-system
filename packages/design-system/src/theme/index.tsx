import React, {
    PropsWithChildren,
    createContext,
    useContext,
    useState,
} from 'react';
import { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IconButton } from '../button';
import { commonTheme } from './common-theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Theme object
export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = (): void => {
        setIsDarkTheme((prev) => !prev);
    };

    useEffect(() => {
        // If local theme is set use that
        if (localStorage.getItem('theme')) {
            if (localStorage.getItem('theme') == 'dark') {
                setIsDarkTheme(true);
            }
        } else if (!window.matchMedia) {
            // Can't auto detect, default to light
        } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // OS theme setting detected as dark
            setIsDarkTheme(true);
        }
    }, []);

    // Update body class for css color variables
    useEffect(() => {
        // Set theme in storage based on dark mode or not
        if (isDarkTheme) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            <StyledThemeProvider theme={commonTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

// Theme switching component
export const ThemeSwitcher = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <IconButton
            onClick={toggleTheme}
            icon={isDarkTheme ? <FaSun /> : <FaMoon />}
        />
    );
};

// Use theme constants
export function useTheme() {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

    const theme = commonTheme;
    return { theme, toggleTheme };
}

export type ColorValues =
    | PrimaryColorValues
    | 'gray'
    | 'neutral'
    | 'white'
    | 'black'
    | undefined;

// Primary colour 'themes' for components who can
// alter primary appearance.
// Default refers to their default colour
export type PrimaryColorValues =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error';

// Return the colour defintiion from css variable
export function cssColor(color: string) {
    return 'var(--' + color + ')';
}
