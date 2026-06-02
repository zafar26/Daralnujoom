import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import SEO_CONFIG from '../next-seo.config';
import { Analytics } from "@vercel/analytics/next"
import {useEffect } from "react"

export default function App({ Component, pageProps }) {
  useEffect(()=>{
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(() => console.log('SW registered'))
          .catch((err) => console.log('SW failed:', err));
      });
    }
  }, [])
  return (
    <>
      <DefaultSeo {...SEO_CONFIG} />
      <Analytics/>

      {/* OG */}
      <meta property="og:title" content="Dar Al Nujoom | Textiles & Tailoring" />
      <meta property="og:description" content="Dar Al Nujoom – Premium textiles and tailoring services. Quality craftsmanship for every occasion." />
      <meta property="og:image" content="/dar_al_nujoom_logo.png" />
      <meta property="og:url" content="https://daralnujom.shop" />
      <meta property="og:type" content="website" />

      {/* Images & ICons */}
      {/* <!-- Favicon ICO (all browsers) --> */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      {/* <!-- PNG fallback --> */}
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* <!-- Apple devices --> */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {/* <!-- Android / PWA --> */}
      <link rel="icon" sizes="192x192" href="/favicon-192.png" />
      {/* Icon */}
      {/* <link rel="icon" href="/dar_al_nujoom.svg" type="image/svg+xml" /> */}

      {/* PWA */}
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#c9a84c" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      <div className="noise-overlay" aria-hidden="true" />
      <Component {...pageProps} />
    </>
  );
}
