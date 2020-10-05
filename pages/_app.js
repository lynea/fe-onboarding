import React from 'react';
import theme from '../theme.styles';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Normalize />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
