import "../styles/globals.css";
import type { AppProps } from "next/app";
import 'react-loading-skeleton/dist/skeleton.css';

declare global {
  interface Window {
    kakao: any;
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
