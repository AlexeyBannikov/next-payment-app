import type { AppProps } from 'next/app';

import { Global } from '../styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  );
}
