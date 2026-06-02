import { Html, Head, Main, NextScript } from 'next/document';
import {useEffect } from "react"

const structuredData = {
  '@context': 'https://daralnujom.shop',
  '@type': 'LocalBusiness',
  name: 'Dar Al Nujom Textiles & Tailoring',
  image: 'https://daralnujom.shop/og-image.jpg',
  description:
    'Premium tailoring and stitching services for uniforms, party wear, and bulk orders.',
  url: 'https://daralnujom.shop',
  telephone: '+971-544779138',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Buteena',
    addressLocality: 'Sharjah',
    addressCountry: 'UAE',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/daralnujom',
    'https://www.facebook.com/daralnujom',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tailoring Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'School Uniform Stitching' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Restaurant Uniform Stitching' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Petrol Pump Uniform Stitching' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Party Wear Stitching' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bulk Uniform Orders' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hotel & Corporate Uniforms' } },
    ],
  },
};

export default function Document() {
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
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="googleb957e3bfe75f765e.html" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
              {/* OG */}
      <meta property="og:title" content="Dar Al Nujom | Textiles & Tailoring" />
      <meta property="og:description" content="Dar Al Nujom – Premium textiles and tailoring services. Quality craftsmanship for every occasion." />
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

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
