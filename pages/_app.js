import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO_CONFIG from '../next-seo.config';
import { Analytics } from "@vercel/analytics/next"

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO_CONFIG} />
      <Analytics/>
      <div className="noise-overlay" aria-hidden="true" />
      <Component {...pageProps} />
    </>
  );
}
