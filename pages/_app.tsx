import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Libre_Franklin, Calistoga } from '@next/font/google';

import GlobalStyle from 'layout/GlobalSettings';
import theme from 'theme';

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const calistoga = Calistoga({
  subsets: ['latin'],
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --libreFranklin-font: ${libreFranklin.style.fontFamily};
            --calistoga-font: ${calistoga.style.fontFamily};
          }
        `}
      </style>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
