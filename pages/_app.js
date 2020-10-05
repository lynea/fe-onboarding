import React from 'react';
import theme from '../theme.styles';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../global-styles';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
