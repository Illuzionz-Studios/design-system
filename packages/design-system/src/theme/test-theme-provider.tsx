import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { commonTheme } from './common-theme';

export const TestThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider theme={commonTheme}>{children}</ThemeProvider>;
};
