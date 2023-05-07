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

const detectColorScheme = () => {
    var theme = 'light'; //default to light

    //local storage is used to override OS theme settings
    if (localStorage.getItem('theme')) {
        if (localStorage.getItem('theme') == 'dark') {
            var theme = 'dark';
        }
    } else if (!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // OS theme setting detected as dark
        var theme = 'dark';
    }

    //dark theme preferred, set document with a `data-theme` attribute
    if (theme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
};

export const ThemeProvider: React.FC = ({ children }) => {
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
