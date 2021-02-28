import type { AppProps } from 'next/app';
import { FC } from 'react';
import { GlobalStyles, theme } from '@theme';
import { ThemeProvider } from 'styled-components';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
