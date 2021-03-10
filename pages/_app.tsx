import type { AppProps } from 'next/app';
import { FC } from 'react';
import { GlobalStyles, theme } from '@theme';
import { ThemeProvider } from 'styled-components';
import { Layout } from 'components/shared';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
