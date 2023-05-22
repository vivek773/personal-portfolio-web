import "../styles/index.scss";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from "next/app";

library.add(fas);


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
