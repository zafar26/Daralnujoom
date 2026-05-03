import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO_CONFIG from '../next-seo.config';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO_CONFIG} />
      <div className="noise-overlay" aria-hidden="true" />
      <Component {...pageProps} />
    </>
  );
}
