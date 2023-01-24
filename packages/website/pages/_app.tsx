import 'styles/globals.scss';
import '@illuzionz-studios/design-system/styles';
import '@illuzionz-studios/design-system/main-styles';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { ThemeProvider } from '@illuzionz-studios/design-system';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        // Set var(--vh) to actual view height of viewport
        const setHeight = () => {
            document.documentElement.style.setProperty(
                '--vh',
                window.innerHeight + 'px'
            );
        };

        // Update viewport on resize
        window.addEventListener('resize', setHeight);
        setHeight();
    }, []);

    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
