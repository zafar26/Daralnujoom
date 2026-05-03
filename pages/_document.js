import { Html, Head, Main, NextScript } from 'next/document';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Dar Al Nujoom Textiles & Tailoring',
  image: 'https://www.daralnujoomtextiles.com/og-image.jpg',
  description:
    'Premium tailoring and stitching services for uniforms, party wear, and bulk orders.',
  url: 'https://www.daralnujoomtextiles.com',
  telephone: '+92-XXX-XXXXXXX',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Your City',
    addressCountry: 'PK',
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
    'https://www.instagram.com/daralnujoom',
    'https://www.facebook.com/daralnujoom',
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
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
