import '@styles/globals.css';

import Layout from '@components/Layout';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout title='hello world'>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
