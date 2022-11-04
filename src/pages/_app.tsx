import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}

export default MyApp;
