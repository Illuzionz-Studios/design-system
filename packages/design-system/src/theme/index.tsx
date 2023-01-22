import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { IconButton } from '../button';
import { commonTheme } from './common-theme';

// Theme object
export const ThemeContext = createContext({
    isDarkTheme: false,
    toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = (): void => {
        setIsDarkTheme((prev) => !prev);
    };

    // Update body class for css color variables
    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('darkTheme');
        } else {
            document.body.classList.remove('darkTheme');
        }
    }, [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
            {children}
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
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'gray'
    | 'neutral'
    | 'white'
    | 'black'
    | undefined;
export type ColorShades = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export function cssColorShade(color: ColorValues, shade: ColorShades) {
    // Invalid color
    if (!color) return 'var(--error500)';

    if (color === 'black' || color === 'white') {
        return 'var(--' + color + ')';
    }

    // Return css variable value
    return 'var(--' + color + shade + ')';
}

export function cssColor(color: string) {
    // Return straight css variable with color name
    return 'var(--' + color + ')';
}
